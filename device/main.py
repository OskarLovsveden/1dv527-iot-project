import time
import json
import ubinascii
import hashlib
import machine
from machine import Pin
from mqtt import MQTTClient # https://github.com/iot-lnu/applied-iot-20/blob/master/network-examples/ccs811-bmp180-dht22-MQTT/lib/mqtt.py
from dht import DHT # https://github.com/JurassicPork/DHT_PyCom

with open('config.json') as f:
    config = json.load(f)

topic_pub = 'devices/lil-opy-iv'
broker_url = 'iot-edu-lab.lnu.se'
client_name = ubinascii.hexlify(hashlib.md5(machine.unique_id()).digest()) # create a md5 hash of the pycom WLAN mac

def print_sub(topic, msg):
    print((topic, msg))

c = MQTTClient(client_name, broker_url, user='', password='', port=1883)
c.set_callback(print_sub)
c.connect()

th = DHT(Pin('P23', mode=Pin.OPEN_DRAIN), 0)
time.sleep(2)

while True:
    result = th.read()

    while not result.is_valid():
        print('Failed to read and send!')

        time.sleep(.5)
        result = th.read()

    print(result.temperature)
    print(result.humidity)
    print('Sensor data read and sent ..')

    c.publish(topic_pub,
                '{"dht11": ' +
                '{"Temperature": ' + str(result.temperature) +
                ', "Humidity": ' + str(result.humidity) + '}}')

    # pybytes.send_signal(1,result.temperature)
    # pybytes.send_signal(2,result.humidity)

    time.sleep(30)
