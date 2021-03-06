import mongoose from 'mongoose'

const restaurantSchema = new mongoose.Schema({
    name: String,
    image_url: String,
    // location: String,
    price: { type: String, enum: ['$', '$$', '$$$', '$$$$', '$$$$$'] }
}, {
    timestamps: true,
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export {
    Restaurant
}