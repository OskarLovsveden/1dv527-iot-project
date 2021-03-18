import mqtt from 'mqtt'

export const setup = () => {
    const client = mqtt.connect(process.env.MQTT_URL)

    client.on('connect', function () {
        client.subscribe(process.env.SUB_TOPIC)
    })

    client.on('message', function (topic, message) {
        // message is Buffer
        console.log(topic)
        const msg = message.toString()
        console.log(JSON.parse(msg))
        // client.end()
    })
}