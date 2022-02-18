const express = require("express");
const Destination = require("../models/destinationModel");
const router = new express.Router();
const auth = require("../auth/auth");
const upload = require("../uploads/uploads");


// inserting destination
router.post('/destination/insert', auth.verifyCustomer, upload.single('j'), function (req, res) {
    const did = req.CustomerInfo._id;
    const dname = req.body.dname;
    
    const data = new Destination({
        dname: dname,
        did: did
    })
    data.save()
        .then(function () {
            res.json({ msg: "Ok", success: true })
        })
        .catch(function (e) {
            res.json(e)
        })
})

// to show own product
router.get("/destination/mydestination", auth.verifyCustomer, function (req, res) {
    Destination.find()
        .then(function (result) {
            res.json(result)
        })
        .catch(function () {
            res.json({ msg: "something went wrong" });
        })
});





module.exports = router;