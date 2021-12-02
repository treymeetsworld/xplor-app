import mongoose from 'mongoose'

const attractionSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String,
    location: String,
}, {
    timestamps: true,
})

const Attraction = mongoose.model('Attraction', attractionSchema)

export {
    Attraction
}