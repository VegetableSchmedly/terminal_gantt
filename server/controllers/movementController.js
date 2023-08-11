import Movement from "../models/MovementModel.js"
import mongoose from "mongoose";

// get all movements
const getMovements = async (req, res) => {
    const movements = await Movement.find({}).sort({createdAt: -1})

    res.status(200).json(movements)
};


// get single movement
const getMovement = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such movement'})
    }

    const movement = await Movement.findById(id)

    if (!movement) {
        return res.status(400).json({error: 'No such movement'})
    }

    res.status(200).json(movement)
};


// create a new movement
const createMovement = async (req, res) => {
    const {sendingVessel, receivingVessel, startTime, endTime, category} = req.body

    let emptyFields = []
    // let timeError = false

    if (!sendingVessel) {
        emptyFields.push('sendingVessel')
    }

    if (!receivingVessel) {
        emptyFields.push('receivingVessel')
    }

    if (!startTime) {
        emptyFields.push('startTime')
    }

    if (!endTime) {
        emptyFields.push('endTime')
    }

    if (!category) {
        emptyFields.push('category')
    }

    // if (startTime > endTime) {
    //     timeError = true
    // }
    
    // if (timeError) {
    //     return res.status(400).json({ error: 'Start time must come before end time.', timeError })
    // }


    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all required fields.', emptyFields })
    }


    // add doc to db
    try { 
        const movement = await Movement.create({sendingVessel, receivingVessel, startTime, endTime, category})
        res.status(200).json(movement)

    } catch (error) {
        res.status(400).json({error: error.message, emptyFields: []})
    }
    console.log(req.body)
};


// delete a movement
const deleteMovement = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such movement'})
    }

    const movement = await Movement.findOneAndDelete({ _id: id })

    if (!movement) {
        return res.status(400).json({error: 'No such movement'})
    }

    res.status(200).json(movement)
}


// update a movement
const updateMovement = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such movement'})
    }

    const movement = await Movement.findOneAndUpdate({ _id: id}, { 

        ...req.body
    })

    if (!movement) {
        return res.status(400).json({error: 'No such movement'})
    }

    res.status(200).json(movement)
}






export { createMovement,  getMovements, getMovement, deleteMovement, updateMovement }