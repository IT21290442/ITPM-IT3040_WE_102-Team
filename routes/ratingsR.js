const express = require('express')
const  ratingsM = require ('../models/ratingsM')

const router = express.Router()

//save Ratings

router.post("/create",async(req,res)=>{
    console.log(req.body)
    const data = new ratingsM (req.body)
    await data.save()
    res.send({sucess : true , message : "data saved sucessfully", data : data})
    
    
    if (err){
        return res.status(400).json({
            error:err
        })
        
    }
})

    module.exports =router