const express = require("express")
const router = express.Router()
let fs = require('fs')

//Import Booked model//
const Booked = require("../models/Booked")

//Post a new Booking//
router.post("/post",async (req,res) =>{
    const {room_id, email,name,date,startTime,endTime} = new Booked(req.body)

    try{
        const newBooking = new Booked({
            room_id,
            email,
            name,
            date,
            startTime,
            endTime
        })
        //save into json file//
        jsonData = JSON.stringify(newBooking)
        fs.writeFile(`./json/booking-${name}.json`,jsonData,function(err){
            if(err){
                console.log(err)
            }
        })
        //save into DB//
        const savedBooking = await newBooking.save()
        if (!savedBooking) throw Error("Something went wrong while saving the booking")

        res.status(200).json({message:"Success",data:savedBooking})
    }catch(err){
        res.status(400).json({error:err})
    }
})

//Get all the booking//
router.get("/" ,(req,res) =>{
    Booked.find()
    .then(bookings => res.json(bookings))
    .catch(err => res.status(400).json({error:err}))


})

module.exports = router

