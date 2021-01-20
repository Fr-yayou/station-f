const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BookedSchema = new Schema ({

    room_id:{
        type:Schema.Types.ObjectId,
        ref:"Room"
    },
    email:{
        type:String,
        required:true,
        unique:false
    },
    name:{
        type:String,
        required:true,
        unique:false
    },
    day:{
        type:Date
    },
    startTime:{
        type:Number
    },
    endTime:{
        type:Number
    }


},{
    timestamps:true
})

module.exports = mongoose.model("Booked",BookedSchema)





