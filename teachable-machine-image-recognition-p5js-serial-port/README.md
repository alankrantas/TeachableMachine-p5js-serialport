## Local Teachable Machine Image Recognition with p5.js Serial Port Output

This is a local Teachable Machine version you can run on your computer, without the need to use p5.js online editor.

1. Install Node.js (https://nodejs.org/en/), download p5.serialcontrol tool (https://github.com/p5-serial/p5.serialcontrol/releases) as well as this project.

2. Train a Teachable Machine image recognition model and download (not upload) it in the form of Tensorflow.js. Unzip the three files (metadata.json, model.json, weights.bin) into the project's \model subdirectory.

3. Open sketch.js in the projecet and change the serial port to the one your device's on. You can run ```mode``` in the Command Prompt (Windows) or ```dmesg | grep tty``` (Linux) to find it.

4. Open a Command Prompt or Terminal and execute ```npm install --save http-server``` under the project root directory. This will install a copy of http-server in the project, under the directory "node-modules".

5. Still in the root directory, execute ```npm start```. This will start the local server and open http://localhost:8080 in the browser.

6. Run the p5.serialcontrol program and select the serial port.
