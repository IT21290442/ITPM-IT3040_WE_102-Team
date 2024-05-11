const mongoose = require('mongoose')
const { default: Ratings } = require('../../client/src/pages/Ratings')

//er shema
const ratingsMSchema = mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:false
    },
    review : {
        type:String,
        required:false
    }


},{
    timestamps :true
})

module.exports = mongoose.model('Ratings',ratingsMSchema)
