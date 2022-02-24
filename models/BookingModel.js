const mongoose = require("mongoose");

const Booking = new mongoose.model("booking",{
    countryname : {
        type : String,
        required:true
    },
    city : {
        type : String,
        required:true
    },
    
    
    bookingId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Customer'
    }

});

module.exports = Booking;

