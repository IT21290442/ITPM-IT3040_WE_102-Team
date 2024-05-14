const router = require('express').Router();
let Assign = require('../models/User');




router.route("/addUsers").post((req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const contactNo = req.body.contactNo;
    const address = req.body.address;
    const email = req.body.email;
    const age = req.body.age;
    const gender = req.body.gender;
    const height = req.body.height;
    const weight = req.body.weight;
    const hairColour = req.body.hairColour;
    

   
    const newAssign = Assign({
        firstName,
        lastName,
        contactNo,
        address,
        email,
        age,
        gender,
        height,
        weight,
        hairColour,
    })

    newAssign.save().then(()=>{
        res.json("User Data Added")
    }).catch((err)=>{
        console.log(err)
    })
})




router.route("/userSearch/:id").get((req, res) => {
    let assignID = req.params.id;
    var filter = {firstName:assignID}

    Assign.find(filter).then((addUsers)=>{
        res.json(addUsers)
    }).catch((err)=>{
        console.log(err);
    })
})




router.route("/getUsers").get((req,res)=>{
    Assign.find().then((addFuels)=>{
        res.json(addFuels)
    }).catch((err)=>{
        console.log(err);
    })
})



router.route("/userUpdate/:id").put(async(req,res)=>{
    let assignID = req.params.id;
    const {firstName,
        lastName,
        contactNo,
        address,
        email,
        age,
        gender,
        height,
        weight,
        hairColour,} = req.body;

    var filter = {firstName:assignID}

    const updateUser = {
        firstName,
        lastName,
        contactNo,
        address,
        email,
        age,
        gender,
        height,
        weight,
        hairColour,}

    const update = await Assign.findOneAndUpdate(filter,updateUser).then(()=>{
        res.json("Updated Successfully")
    }).catch((err)=>{
        console.log(err);
    })
})



router.route("/fdelete/:id").delete(async(req,res)=>{
    const assignID = req.params.id;

    var filter = {vehicleOrStorageNumber:assignID}
    
    await Assign.findOneAndDelete(filter).then(()=>{
        res.json("Deleted Assigned Data Successfully")
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;