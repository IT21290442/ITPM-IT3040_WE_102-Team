const express = require ('express')
const cors = require ('cors')
const mongoose = require('mongoose')  


 const app = express()
    app.use(cors())
    app.use(express.json())


const PORT = process.env.PORT || 8080

//er shema
const schemaData = mongoose.Schema({
    name : String,
    email : String,
    review : String,

},{
    timestamps :true
})
//create model

const userModel = mongoose.model("user",schemaData)

//read data  || Get
//http://localhost:8080/
app.get("/",async(req,res)=>{
    const data = await userModel.find({})
    res.json({sucess : true , data : data})
})

//create data || save data in mongodb || Post
//http://localhost:8080/create
/* 
{
    "name" : "",
    "email": "",
    "review": ""
}
*/ 
app.post("/create",async(req,res)=>{
    console.log(req.body)
    const data = new userModel (req.body)
    await data.save()

    res.send({sucess : true , message : "data saved sucessfully", data : data})
})
//update data  || Put
//http://localhost:8080/update
/*{
    id : "",
    name : "",
    .............etc
} */
app.put("/update",async(req,res)=>{
    console.log(req.body)
    const {_id,...rest} = req.body

    console.log(rest)
    const data = await userModel.updateOne({_id : _id},rest)

    res.send({sucess : true, message :"data updated sucessfully", data : data})
    
})
//dete api || delete
//http://localhost:8080/delete/<id>

app.delete("/delete/:id",async(req,res)=>{
    const id = req.params.id
    console.log(id)
    const data = await userModel.findOneAndDelete({_id : id}) //deleteOne

    res.send({sucess : true, message :"data deleted sucessfully",data :data })

    
})
  



//API
mongoose.connect("mongodb+srv://vdr:vdr123@vdroom.n2pzweq.mongodb.net/crudreviews")
.then(()=>{
    console.log("Connected to DB")
    app.listen(PORT,()=>console.log("Server is running"))
})
.catch((err)=>console.log(err))

