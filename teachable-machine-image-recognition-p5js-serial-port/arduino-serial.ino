char result = '0';

void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop() {
  if (Serial.available()) {
    result = Serial.read();
  }
  switch (result) {
    case '1':
      digitalWrite(13, HIGH);  // turn on LED on pin 13 if the received label is '1'
      break;
    default:
      digitalWrite(13, LOW);
  }
}
