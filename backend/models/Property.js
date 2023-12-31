const mongoose = require("mongoose")

const PropertySchema = new mongoose.Schema({
    currentOwner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true,
        min: 15,
    },
    type: {
        type: String,
        enum: ["metropolitan", "municipality", "village"],
        required: true
    },
    desc: {
        type: String,
        required: true,
        min: 150,
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sqmeters: {
        type: Number,
        required: true,
        min: 15
    },
    district : {
        type: String,
        required: true,
    },
    beds: {
        type: Number,
        required: true,
        min: 1
    },
    featured: {
        type:Boolean,
        default: true,
    }
}, {timestamps: true})

module.exports = mongoose.model("Property", PropertySchema)