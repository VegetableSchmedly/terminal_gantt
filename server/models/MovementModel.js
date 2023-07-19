import mongoose from "mongoose";

const Schema = mongoose.Schema

const movementSchema = new Schema({
    sendingVessel: {
        type: Number,
        required: true
    },
    receivingVessel: {
        type: Number,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
}, {timestamps: true}

);

export default mongoose.model('Movement', movementSchema)


