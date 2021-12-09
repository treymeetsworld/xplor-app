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

const tripSchema = new mongoose.Schema({
    city: String,
    startDate: Date,
    endDate: Date,
    packList: [packListSchema],
    restaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Restaraunts" }],
    attractions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Attractions" }],
    flights: [flightSchema],
    hotel: [hotelSchema],
    tripHolder: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
    url:String,
}, {
    timestamps: true,
})

const Trip = mongoose.model('Trip', tripSchema)

export {
    Trip
}