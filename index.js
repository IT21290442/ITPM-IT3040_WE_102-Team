const express = require ('express')
const cors = require ('cors')
const mongoose = require('mongoose')  


 const app = express()
    app.use(cors())
    app.use(express.json())


const PORT = process.env.PORT || 8080


mongoose.connect("mongodb+srv://vdr:vdr123@vdroom.n2pzweq.mongodb.net/crudreviews")
.then(()=>{
    console.log("Connected to DB")
    app.listen(PORT,()=>console.log("Server is running"))
})
.catch((err)=>console.log(err))


const userRouter = require('./routes/User_routes');
app.use("/user",userRouter);

//const ratingRouter = require('./routes/Rating_routes');
//app.use("/rating",ratingRouter);





