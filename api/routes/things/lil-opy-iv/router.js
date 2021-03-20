import express from 'express'
import path from 'path'

import { router as propertiesRouter } from './property-router.js'

import { ThingController } from '../../../controllers/thing-controller.js'

const thing = new ThingController()

export const router = express.Router()

router.get('/', (req, res, next) => thing.root(req, res, next))
router.get('/ui', (req, res, next) => res.redirect(301, process.env.UI_URL))
router.use('/properties', propertiesRouter)
