const serialPort = 'COM__';  // change this to your serial port

let classifier,
    serial,
    video,
    flippedVideo,
    label = '',
    conf = 0;

function preload() {
    classifier = ml5.imageClassifier('./image_model/model.json');
    serial = new p5.SerialPort();
}

function setup() {
    serial.open(serialPort);
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
    console.log(`Result: ${label} (${conf} %)`);
    serial.write(label);
    classifyVideo();
}
