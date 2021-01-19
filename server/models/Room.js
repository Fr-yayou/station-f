const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RoomSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    capacity:{
        type:Number,
        required:true
    },
    equipements:[
        {
            name:String
        }
    ]
},{
    timestamps:true
})

module.exports = mongoose.model("Room",RoomSchema)