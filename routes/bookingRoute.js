const express = require("express");
const Booking = require("../models/BookingModel");
const router = new express.Router();
const auth = require("../auth/auth");

router.post("/booking/Booking", auth.verifyCustomer, async function (req, res) {
  const bookingId = req.CustomerInfo._id;
  const countryname = req.body.countryname;
  const city = req.body.city;
  const people = req.body.people;
  const payment = req.body.payment;
  
  const bdata = new Booking({
    countryname: countryname,
    city: city,
    people: people,
    payment: payment,
    bookingId: bookingId,
  });
  await bdata
    .save()
    .then(function () {
      res.json({ meg: "ok", success: true });
    })
    .catch(function () {
      res.json({ meg: "something wrong!", success: false });
    });
});



module.exports = router;

// const express = require("express");
// const bcryptjs = require("bcryptjs");
// const User = require("../models/contactModel");
// const router = new express.Router();

// router.post("/user/contact", auth.verifyCustomer, function (req, res) {
//     const userId = req.CustomerInfo._id;
//     const name = req.body.name;
//     const email = req.body.name;
//     User.findOne({ name: name }).then(function (userData) {
//         // if the name is in the database
//         if (userData != null) {
//             res.json({ message: "You had already responded!" })
//             return;
//         }

//         const email = req.body.email;
//         bcryptjs.hash(email, 10, function (e) {
//             const name = req.body.name;
//             const email = req.body.email;
//             const cdata = new Customer({
//                 name: name,
//                 email: email,
//                 userId: userId
//             })
//             cdata.save()
//                 .then(function () {
//                     res.json({ message: "Response had been saved successfully!", success: true })
//                 })
//                 .catch(function (e) {
//                     res.json(e)
//                 })
//         })

//     })
// })
