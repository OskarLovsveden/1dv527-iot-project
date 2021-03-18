import express from 'express'
import createError from 'http-errors'
import { router as lilOpyIVRouter } from './things/lil-opy-iv/router.js'

export const router = express.Router()

router.use('/things/lil-opy-iv/', lilOpyIVRouter)

router.use('*', (req, res, next) => next(createError(404)))
