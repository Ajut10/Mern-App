const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')


// get all workout
const getWorkouts =async(req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt:-1})

    res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg:"no such id"})
    }
    const workout = await Workout.findById(id)
    if(!workout){
        res.status(404).json({error: 'Not Found workouts'})

    }
    res.status(200).json(workout)
}
//create a new workout
const createWorkout = async (req, res) => {
    const {title,reps,load} = req.body
    try{
        const workout =await Workout.create({title,reps,load})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//delete a single workout
const deleteWorkout = async(req, res) => {
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"error no such id"})
    }
    const workout= await Workout.findOneAndDelete({_id:id})

    if(!workout){
        return res.status(400).json({error:"error no such workout "})
    }
    res.status(200).json(workout)
}

//update a single workout
const updateWorkout = async(req, res) => {
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such id'})
    }
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!workout){
        return res.status(400).json({error: 'no such workout'})
    }
    res.status(200).json(workout)
}

module.exports ={
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout,
}