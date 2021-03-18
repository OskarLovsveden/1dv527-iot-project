import mongoose from 'mongoose'

export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connection to MongoDB established..')
    } catch (error) {
        console.error(error)
        process.exit(0)
    }
}
