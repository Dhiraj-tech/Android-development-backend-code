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
    
})

module.exports = mongoose.model("Destination", Destination);
