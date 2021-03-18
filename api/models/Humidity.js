import mongoose from 'mongoose'
const { Schema, model } = mongoose

const schema = new Schema({
    value: Number
}, {
    timestamps: {
        createdAt: true,
        updatedAt: false
    },
    versionKey: false,
    toJSON: {
        transform: function (doc, ret) {
            delete ret._id
            ret.timestamp = ret.createdAt
            delete ret.createdAt
        }
    }
})

schema.statics.get = async function () {
    return this.findOne({}).sort({ createdAt: -1 }).limit(1)
}

export const Humidity = model('Humidity', schema)