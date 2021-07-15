## Local Teachable Machine Image Recognition with p5.js Serial Port Output

This is a local Teachable Machine version you can run on your computer, without the need to use p5.js online editor. All the JavaScript libraries are already included.

### Install Python 3

https://www.python.org/downloads/

### Download p5.serialcontrol

https://github.com/p5-serial/p5.serialcontrol/releases

### Prepare the project

Download the project somewhere into your computer.

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

Open Command Prompt or Terminal, switch to the project directory and execute

```python -m http.server``` (on Windows) or ```python3 -m http.server``` (on Linux)

then open http://localhost:8000 in your browser.
