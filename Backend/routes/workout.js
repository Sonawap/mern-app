const express = require('express');

const router = express.Router();

const { 
  createWorkOut,
  getAWorkOut,
  getAllWorkOuts,
  deleteAWorkOut,
  updateAWorkOut 
} = require('../controllers/workout');
// Get All Workouts
router.get('/', getAllWorkOuts);

// Get a Workouts
router.get('/:id', getAWorkOut);

// Post a new Workout
router.post('/', createWorkOut);

// Delete a Workout
router.delete('/:id', deleteAWorkOut);

// Update a Workouts
router.put('/:id', updateAWorkOut);

module.exports = router;