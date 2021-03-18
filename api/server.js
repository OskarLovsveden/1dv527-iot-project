import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import * as mongoDB from './config/mongoDB.js'
import * as mqtt from './config/MQTT.js'
import { router } from './routes/router.js'

dotenv.config()

const main = async () => {
    await mongoDB.connect()
    mqtt.setup()

    const app = express()
    app.use(cors())
    app.use(helmet())

    app.use('/', router)

    app.use(function (err, req, res, next) {
        err.status = err.status || 500

        if (req.app.get('env') !== 'development') {
            res
                .status(err.status)
                .json({
                    status: err.status,
                    message: err.message
                })
            return
        }

        return res
            .status(err.status)
            .json({
                status: err.status,
                message: err.message,
                innerException: err.innerException,
                stack: err.stack
            })
    })

    app.listen(process.env.PORT, () => {
        console.log(`Server started on http://localhost:${process.env.PORT}`)
        console.log('Press Ctrl-C to terminate...')
    })
}


main().catch(console.error)