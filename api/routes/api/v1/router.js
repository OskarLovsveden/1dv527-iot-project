import express from 'express'

import { router as propertiesRouter } from './property-router.js'

import { ThingController } from '../../../controllers/thing-controller.js'

const thing = new ThingController()

export const router = express.Router()

router.get('/', (req, res, next) => thing.root(req, res, next))
router.use('/properties', propertiesRouter)
