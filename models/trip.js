import mongoose from 'mongoose'

const packListSchema = new mongoose.Schema({
    item: String,
    category: {
        type: String,
        enum: ['cosmetics', 'bath', 'clothes', 'medicine', 'documents', 'accessories']
    }
}, {
    timestamps: true
})

const flightSchema = new mongoose.Schema({
    airport: String,
    airline: String,
    flightNo: String,
    dateTime: Date,
}, {
    timestamps: true
})

const hotelSchema = new mongoose.Schema({
    name: String,
    cost: { type: Number, min: '25' }
}, {
    timestamps: true
})

const tripSchema = new mongoose.Schema({
    city: String,
    startDate: Date,
    endDate: Date,
    packList: [packListSchema],
    restaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Restaraunts" }],
    attractions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Attractions" }],
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