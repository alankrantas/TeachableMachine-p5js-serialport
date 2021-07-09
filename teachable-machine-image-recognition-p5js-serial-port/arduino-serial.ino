char result = '0';

void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop() {
  // read a single character (label or class name) from serial port
  if (Serial.available()) {
    result = Serial.read();
  }
  // do something depending on the label
  switch (result) {
    case '1':  // label "1"
      digitalWrite(13, HIGH);  // turn on LED on pin 13
      break;
    default:  // other labels
      digitalWrite(13, LOW);  // turn off LED on pin 13
  }
}
