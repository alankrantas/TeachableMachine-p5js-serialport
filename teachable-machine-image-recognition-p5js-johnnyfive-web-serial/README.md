## Local Teachable Machine Image Recognition with p5.js + Johnny Five Web Serial

**Note: the Johnny Five library only works on Windows. Google Chrome is also required.**

This is a local Teachable Machine version you can run on your computer, without the need to use p5.js online editor. All the JavaScript libraries are already included. This version uses p5.j5 (Johnny Five for P5.js) to control Arduino boards loaded with StandardFirmataPlus firmware via web serial.

This sample code can also be downloaded [here](https://github.com/alankrantas/TeachableMachine-p5js-serialport/blob/master/teachable-machine-image-recognition-p5js-johnnyfive-web-serial.zip).

### Install Python 3

https://www.python.org/downloads/

### Upload StandardFirmataPlus to Arduino

https://github.com/firmata/arduino/blob/master/examples/StandardFirmataPlus/StandardFirmataPlus.ino

This can also be found in Arduino IDE's builtin example under ```Firmata``` directory. Classic Arduinos like Uno, Nano, Leonardo, Mega are supported.

### Prepare the project

Download the project somewhere into your computer.

### Train and download Teachable Machine image recognition model

https://teachablemachine.withgoogle.com/train/image

Train a model, the image labels can be named as anything, as long as all labels are different.

Download (not upload) it in the form of Tensorflow.js. Unzip the three files (metadata.json, model.json, weights.bin) into the project's image_model subdirectory.

### Edit sketch.js

Open ```sketch.js``` in the project and modify the constant variable ```labels``` and ```ledPins``` to match your model. For example:

```javascript
const labels = [
    'Class 1', 
    'Class 2', 
    'Class 3'
];
const ledPins = [
    2, // pin 2 for 'Class 1'
    3, // pin 3 for 'Class 2'
    4  // pin 4 for 'Class 3'
];
```

So by default if the model recognize the object as "Class 1", led on pin 2 will light up; led on pin 3 light up for "Class 2", and so on.

### Start local server

Open Command Prompt or Terminal, switch to the project directory and execute

```python -m http.server``` (on Windows) or ```python3 -m http.server``` (on Linux)

then open http://localhost:8000 in your browser.

### Connect Arduino board via web serial

After the web page shows up, click "Authorize Serial Device" and select the board's serial port.

### Johnny Five / p5.j5 reference

* http://johnny-five.io/api/
* https://github.com/monteslu/p5.j5
