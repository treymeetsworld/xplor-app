import mongoose from 'mongoose'

const packListSchema = new mongoose.Schema({
    item: String,
    category: {
        type: String,
        enum: ['cosmetics', 'bath', 'clothes', 'medicine', 'documents', 'accessories'],
        packed: Boolean,
    }
}, {
    timestamps: true
})

const flightSchema = new mongoose.Schema({
    airport: String,
    airline: String,
    flightNo: String,
    confirmationNum: String,
    date: Date,
    departureTime: String,
    landTime: String
}, {
    timestamps: true
})

const hotelSchema = new mongoose.Schema({
    name: String,
    address: String,
    confirmationNum: String
}, {
    timestamps: true
})

const restaurantSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    price: { type: String, enum: ['$', '$$', '$$$', '$$$$', '$$$$$'] }
}, {
    timestamps: true,
})

const attractionSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String
}, {
    timestamps: true,
})

const tripSchema = new mongoose.Schema({
    city: String,
    startDate: Date,
    endDate: Date,
    imageUrl: String,
    packList: [packListSchema],
    restaurants: [restaurantSchema],
    attractions: [attractionSchema],
    flights: [flightSchema],
    hotel: [hotelSchema],
    tripHolder: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" }
}, {
    timestamps: true,
})

const Trip = mongoose.model('Trip', tripSchema)

export {
    Trip
}