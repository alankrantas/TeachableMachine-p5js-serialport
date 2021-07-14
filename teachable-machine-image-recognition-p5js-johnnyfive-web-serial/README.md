## Local Teachable Machine Image Recognition with p5.js + Johnny Five Web Serial

This is a local Teachable Machine version you can run on your computer, without the need to use p5.js online editor. All the JavaScript libraries are already included. This version uses p5.j5 (Johnny Five for P5.js) to control Arduino boards loaded with StandardFirmataPlus firmware via web serial.

This sample code can also be downloaded [here](https://github.com/alankrantas/TeachableMachine-p5js-serialport/blob/master/teachable-machine-image-recognition-p5js-johnnyfive-web-serial.zip).

### Install Node.js or Python 3

https://nodejs.org/en/ or https://www.python.org/downloads/

### Upload StandardFirmataPlus

https://github.com/firmata/arduino/blob/master/examples/StandardFirmataPlus/StandardFirmataPlus.ino

This can also be found in Arduino IDE's builtin example under ```Firmata``` directory.

### Prepare the project

Download the project into your computer.

If you are using Node.js, open a Command Prompt or Terminal and execute

```npm install --save http-server```

under the project root directory. This will install a copy of http-server in the project, under the directory "node-modules".

Python 3 users do not need to install anything else.

### Train and download Teachable Machine image recognition model

https://teachablemachine.withgoogle.com/train/image

Train a model, the image labels should be named as single characters like "1", "2", "3"...etc. because the Arduino script reads single characters.

Download (not upload) it in the form of Tensorflow.js. Unzip the three files (metadata.json, model.json, weights.bin) into the project's image_model subdirectory.

### Edit sketch.js

Open ```sketch.js``` in the project and modify the constant variable ```labels``` and ```ledPins``` to match your model.

By default if the model recognize "Class 1", led on pin 2 will light up, led on pin 3 for "Class 2", and so on.

### Start local server

Make sure your webcam is ready, your Arduino board is connected, then open a Command Prompt or Terminal.

For Node.js users, execute

```npm start```

under the project root directory. This will start the local server and open http://localhost:8000 in the browser.

Python 3 users execute

```python -m http.server``` (on Windows) or ```python3 -m http.server``` (on Linux)

then open http://localhost:8000 in your browser.

### Connect Arduino board via web serial

After the web page shows up, click "Authorize Serial Device" and select the board's serial port. You'll have to use Google Chomre.
