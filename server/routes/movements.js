import express from "express";
import { createMovement, getMovements, getMovement, deleteMovement, updateMovement } from "../controllers/movementController.js";

const router = express.Router();


// Get all movements
router.get('/', getMovements);

// Get single movement
router.get('/:id', getMovement);

// POST a new movement
router.post('/', createMovement);

// Delete a movement
router.delete('/:id', deleteMovement);

// UPDATE a movement
router.patch('/:id', updateMovement);



export default router;