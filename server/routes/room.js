const express = require("express")
const router = express.Router()



//Import Room model//
const Room = require('../models/Room')


router.post("/post",async (req,res) => {
    // Destructure object newRoom
    const {name,description,capacity,equipements} = new Room(req.body)

    try{
       const newRoom = new Room({
           name,
           description,
           capacity,
           equipements
       })

       const savedRoom = await newRoom.save()
       if (!savedRoom) throw Error("Something went wrong while saving the room")

       res.status(200).json({msg:"Success",data:savedRoom})

    }catch(err){
        res.status(400).json({msg:err})
    }
})

router.get("/",(req,res) =>{
    Room.find()
    .then(rooms => res.json(rooms))
    .catch(err => res.status(400).json({error:err}))
})


module.exports = router