import mqtt from 'mqtt'

import { Temperature } from '../models/Temperature.js'
import { Humidity } from '../models/Humidity.js'

export const setup = () => {
    const client = mqtt.connect(process.env.MQTT_URL)

    client.on('connect', () => {
        client.subscribe(process.env.SUB_TOPIC)
    })

    client.on('message', (topic, message) => {
        // message is Buffer
        const data = JSON.parse(message.toString())

        // Save
        const h = new Humidity({
            topic: topic,
            value: data.dht11.Humidity
        })
        h.save()

        const t = new Temperature({
            topic: topic,
            value: data.dht11.Temperature
        })
        t.save()
    })
}