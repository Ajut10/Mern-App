const express = require('express')
const Workout = require('../models/workoutModel')
// const workout = require('../models/workout')
const {
    createWorkout,
    getWorkouts,
    getWorkout
}=require('../controllers/workoutController')
const router = express.Router()

router.get('/',getWorkouts)

router.get('/:id', getWorkout)

router.post('/',createWorkout)

router.delete('/:id',(req,res) =>{
    res.json({mssg:"delete a workout"})
})

router.patch('/:id',(req,res) =>{
    res.json({mssg:"patch a new workout"})
})
module.exports = router