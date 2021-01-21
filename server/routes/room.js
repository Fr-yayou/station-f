const express = require("express")
const router = express.Router()



//Import Room model//
const Room = require('../models/Room')



//Post a new room//
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

       res.status(200).json({message:"Success",data:savedRoom})

    }catch(err){
        res.status(400).json({error:err})
    }
})

//Get all the rooms//

router.get("/",(req,res) =>{
    Room.find()
    .then(rooms => res.json(rooms))
    .catch(err => res.status(400).json({error:err}))
})


//Get one room//

router.get("/:id",async(req,res) =>{
    try{
        const room = await Room.findById(req.params.id)
        if(!room) throw Error("No room found")
        
        res.status(200).json(room)
    }catch(err){
        res.status(400).json({error:err})
    }
})




module.exports = router