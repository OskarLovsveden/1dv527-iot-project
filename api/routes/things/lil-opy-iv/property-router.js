import express from 'express'

import { PropertyController } from '../../../controllers/property-controller.js'

const property = new PropertyController()

export const router = express.Router()

router.get('/', (req, res, next) => property.get(req, res, next))
router.get('/temperature', (req, res, next) => property.temperature(req, res, next))
router.get('/humidity', (req, res, next) => property.humidity(req, res, next))
