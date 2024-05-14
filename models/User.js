const mongoose = require('mongoose')

const AssignSchema = mongoose.Schema({

    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    contactNo:{
        type:String,
    },
    address:{
        type:String,
    },
    email:{
        type:String,
        
    },
    age:{
        type:String,
    },
    gender:{
        type:String,
    }, 
    height:{
        type:String,
    },

    weight:{
        type:Number,
    },
    skinColour:{
        type:String,
    },
    hairColour:{
        type:String,
    },
   
})



const AssignModel = mongoose.model("user" , AssignSchema)
module.exports = AssignModel
