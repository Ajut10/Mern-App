// const mongoose = require('mongoose');
// let dbConnection;
// module.exports={
//     connectToDb:(cb)=>{

//         mongoose.connect(process.env.MONGO)
//         .then((client)=>{
//             dbConnection=client.db()
//             return cb();
//         })
//         .catch((err)=>{
//             console.log(err)
//             return cb(err)
//         })
//     }, //establish connection
//     //return the funtion to that database
//     getDb:()=>dbConnection,

// }