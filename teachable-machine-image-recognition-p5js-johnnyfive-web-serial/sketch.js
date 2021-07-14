const labels = [
    'Class 1', 
    'Class 2', 
    'Class 3'
];
const ledPins = [
    2, // pin 2 for Class 1
    3, // pin 3 for Class 2
    4  // pin 4 for Class 3
];

let classifier,
    video,
    flippedVideo,
    label = '',
    conf = 0,
    boardConnected = false,
    leds = [];

function preload() {
    loadBoard();
    classifier = ml5.imageClassifier('./image_model/model.json');
}

function setup() {
    p5.j5.events.on('boardReady', () => {
        ledPins.forEach(pin => {
            leds.push(new five.Led(pin));
        });
        boardConnected = true;
    });
    createCanvas(320, 260);
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();
    flippedVideo = ml5.flipImage(video);
    classifyVideo();
}

function draw() {
    background(0);
    image(flippedVideo, 0, 0);
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(`Result: ${label} (${conf} %)`, width / 2, height - 4);
    setBoard();
}

function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
    flippedVideo.remove();
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
        return;
    }
    label = String(results[0].label);
    conf = Math.round(Number(results[0].confidence) * 10000) / 100;
    // console.log(`Result: ${label} (${conf} %)`);
    classifyVideo();
}

function setBoard() {
    if (boardConnected) {
        let labelIndex = labels.indexOf(label);
        // console.log(labelIndex);
        leds.forEach((led, index) => {
            if (led) {
                if (labelIndex == index && conf >= 95) {
                    led.on();
                } else {
                    led.off();
                }
            }
        });
    }
}
