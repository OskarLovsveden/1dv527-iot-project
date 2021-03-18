import mongoose from 'mongoose'
const { Schema, model } = mongoose

const schema = new Schema({
    topic: String,
    value: Number,
    unit: { type: String, default: '%' }
}, {
    timestamps: true
})

export const Humidity = model('Humidity', schema)