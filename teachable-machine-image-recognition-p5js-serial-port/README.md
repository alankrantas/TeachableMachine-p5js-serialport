# Local Teachable Machine Image Recognition with p5.js Serial Port Output

This is a local Teachable Machine version you can run on your computer, without the need to use p5.js online editor. All the JavaScript libraries are already included.

### Install Node.js

https://nodejs.org/en/

### Download p5.serialcontrol

https://github.com/p5-serial/p5.serialcontrol/releases

### Prepare the project

Download the project into your computer.

Open a Command Prompt or Terminal and execute

```npm install --save http-server```

under the project root directory. This will install a copy of http-server in the project, under the directory "node-modules".

### Train and download Teachable Machine image recognition model

https://teachablemachine.withgoogle.com/train/image

Train a model, the image labels should be named as single characters like "1", "2", "3"...etc. because the Arduino script reads single characters.

Download (not upload) it in the form of **Tensorflow.js**. Unzip the three files (metadata.json, model.json, weights.bin) into the project's **image_model** subdirectory.

### Choose serial port

Open sketch.js in the projecet and change the serial port to the one your device's on.

You can run ```mode``` in the Command Prompt (Windows) or ```dmesg | grep tty``` (Linux) to find it.

### Upload Arduino script

Open arduino-serial.ino in Arduino IDE (https://www.arduino.cc/en/software), modify it as you like, and upload to your device.

### Run p5.serialcontrol

Close Arduino IDE, run the p5.serialcontrol program and select the serial port.

### Start local server

Make sure your webcam is ready, your Arduino board is connected, then open a Command Prompt or Terminal and execute

```npm start```

under the project root directory. This will start the local server and open http://localhost:8080 in the browser.
