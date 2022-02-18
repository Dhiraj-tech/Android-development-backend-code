const mongoose = require("mongoose");


const Destination = new mongoose.Schema({
    dname: {
        type : String,
        required:true
    },
    
    did:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Customer'
    },
    deimage:{
        type:String
    }
})

module.exports = mongoose.model("Destination", Destination);
