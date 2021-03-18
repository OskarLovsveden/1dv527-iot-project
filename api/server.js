import dotenv from 'dotenv'

import * as mongoDB from './config/mongoDB.js'
import * as mqtt from './config/MQTT.js'

dotenv.config()

mongoDB.connect()
mqtt.setup()