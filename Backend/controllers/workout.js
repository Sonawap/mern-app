const WorkOut = require('../models/workout');
const mongoose = require("mongoose");
// Get All Workouts
const getAllWorkOuts = async (req, res) => {
  const workOuts = await WorkOut.find({}).sort({created_at : -1});
  res.json(workOuts).status(200);
}

// Get a Workouts
const getAWorkOut = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.json({error: "No such Workout"}).status(404)
  }
  const workOut = await WorkOut.findById(id);
  if(!workOut){
    return res.json({error: "No such Workout"}).status(404)
  }else{
    res.json(workOut).status(200);
  }
}

// Post a new Workout
const createWorkOut = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workOut = await WorkOut.create({title, load, reps});
    res.json(workOut).status(200);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Delete a Workout
const deleteAWorkOut = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.json({error: "No such Workout"}).status(404)
  }

  const workOut = await WorkOut.findOneAndDelete({_id : id});
  if(!workOut){
    return res.json({error: "No such Workout"}).status(404)
  }else{
    res.json(workOut).status(200);
  }
} 

// Update a Workouts
const updateAWorkOut = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.json({error: "No such Workout"}).status(404)
  }

  const workOut = await WorkOut.findOneAndUpdate({_id : id}, {
    ...req.body
  });
  if(!workOut){
    return res.json({error: "No such Workout"}).status(404)
  }else{
    res.json(workOut).status(200);
  }
} 

module.exports = {
  createWorkOut,
  getAWorkOut,
  getAllWorkOuts,
  deleteAWorkOut,
  updateAWorkOut
}