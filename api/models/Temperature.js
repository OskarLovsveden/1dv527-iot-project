import mongoose from 'mongoose'
const { Schema, model } = mongoose

const schema = new Schema({
    topic: String,
    value: Number,
    unit: { type: String, default: 'celsius' }
}, {
    timestamps: true
})

export const Temperature = model('Temperature', schema)