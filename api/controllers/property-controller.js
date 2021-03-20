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
                "value": JSON.parse(JSON.stringify(temperature)),
                "links": {
                    "temperature": {
                        "link": `${req.protocol}://${req.get('host')}${req.originalUrl}/temperature`,
                        "title": "The current temperature."
                    }
                }
            },
            {
                "id": "humidity",
                "name": "Office Humidity Sensor",
                "value": JSON.parse(JSON.stringify(humidity)),
                "links": {
                    "humidity": {
                        "link": `${req.protocol}://${req.get('host')}${req.originalUrl}/humidity`,
                        "title": "The current humidity."
                    }
                }
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