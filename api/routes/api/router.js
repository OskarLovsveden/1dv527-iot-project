import express from 'express'

import { TemperatureController as temperature } from '../../controllers/temperature-controller.js'
import { HumidityController as humidity } from '../../controllers/humidity-controller.js'

export const router = express.Router()

router.get('/temperature', (req, res, next) => temperature.get(req, res, next))
router.get('/humidity', (req, res, next) => humidity.get(req, res, next))
