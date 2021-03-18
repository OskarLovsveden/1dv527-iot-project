import { Temperature } from '../models/Temperature.js'
import { Humidity } from '../models/Humidity.js'

export class PropertyController {
    async get(req, res, next) {
        const temperature = await Temperature.get()
        const humidity = await Humidity.get()

        res.send([
            {
                "id": "temperature",
                "name": "Office Temperature Sensor",
                "value": JSON.parse(JSON.stringify(temperature))
            },
            {
                "id": "humidity",
                "name": "Office Humidity Sensor",
                "value": JSON.parse(JSON.stringify(humidity))
            }
        ])
    }

    async temperature(req, res, next) {
        try {
            const temperature = await Temperature.get()
            res.json([temperature])
        } catch (error) {
            next(error)
        }
    }

    async humidity(req, res, next) {
        try {
            const humidity = await Humidity.get()
            res.json([humidity])
        } catch (error) {
            next(error)
        }
    }
}