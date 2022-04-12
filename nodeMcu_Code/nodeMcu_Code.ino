#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

#define FIREBASE_HOST "iotgasleak-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "2as8yvzXXCNksphHOZEwpU0DCC64Gyu2TgpxXRzC"

#define WIFI_SSID "Sachintha"
#define WIFI_PASSWORD "sachintha"

#define MQ2_SENSOR    A0

int MQ2_SENSOR_Value = 0;

void setup() {
  Serial.begin(9600);

  pinMode(MQ2_SENSOR, INPUT);
  // connect to wifi.
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);

}

void loop() {
  MQ2_SENSOR_Value = map(analogRead(MQ2_SENSOR), 0, 30, 0, 100);

  if (MQ2_SENSOR_Value > 20 ) {
    Firebase.setInt("IOTcourseWork/gasValue", MQ2_SENSOR_Value);
    //    digitalWrite(GREEN_LED, LOW);
    //    digitalWrite(RED_LED, HIGH);
  }
  else {
    Firebase.setInt("IOTcourseWork/gasValue", MQ2_SENSOR_Value);
    //    digitalWrite(GREEN_LED, HIGH);
    //    digitalWrite(RED_LED, LOW);
  }
}
