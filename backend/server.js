require('dotenv').config()
const mongoose = require('mongoose')



const express = require('express')

const workoutRoutes = require('./routes/workouts')

//express app
const app = express()
//middleware r
app.use(express.json())
mongoose.connect(process.env.MONGO)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`listening on port ${process.env.PORT} and connected to database`)
    })
}).catch((err)=>{
    console.error(err)
})

app.use((req,res ,next)=>{
    console.log(req.path,req.method)
    next()
})
// routes
app.use('/api/workouts',workoutRoutes)

