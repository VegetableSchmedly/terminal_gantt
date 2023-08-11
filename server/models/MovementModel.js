import mongoose from "mongoose";

const Schema = mongoose.Schema

const movementSchema = new Schema({
    sendingVessel: {
        type: String,
        required: true
    },
    receivingVessel: {
        type: String,
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
    category: {
        type: String,
        enum: ['Internal', 'Vessel', 'Pipeline', 'Railcar'],
        default: 'Internal',
        required: true
    }
}, {timestamps: true}

);

export default mongoose.model('Movement', movementSchema)


