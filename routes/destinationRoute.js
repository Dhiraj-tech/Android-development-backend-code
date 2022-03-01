const express = require("express");
const Destination = require("../models/destinationModel");
const router = new express.Router();
const auth = require("../auth/auth");
const upload = require("../uploads/uploads");


// inserting destination
router.post('/destination/insert', auth.verifyCustomer, upload.single('j'), function (req, res) {
    const did = req.CustomerInfo._id;
    const dname = req.body.dname;
    const deimage = req.file.filename;

    const data = new Destination({
        dname: dname,
        deimage: deimage,
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

router.get("/destination/single/:did", auth.verifyCustomer, function (req, res) {
    const did = req.params.did;
    Destination.findOne({ _id: did })
        .then(function (result) {
            res.json(result)
        })
        .catch(function () {
            res.json({ msg: "something went wrong" });
        })
})

//to update
router.put('/destination/update', auth.verifyCustomer,upload.single('j'), function (req, res) {
    // upload.single('blog_images'),
    const did = req.body.did;
    const dname = req.body.dname;
    const deimage = req.file.filename;
    Destination.updateOne({_id: did} ,{

        dname: dname,
        deimage : deimage,
    })
        .then(function () {
            res.json({ message: "Destination Updated", success: true})
        })
        .catch(function () {
            res.json({ message: "Something went wrong!" })
        })
})
router.get('/alldestination', function (req, res) {
    Destination.find()
        .then(function (alldestination) {
            res.json({alldestination })
        })
        .catch(function(){
            res.json({ message: "not found"})
        })
})

// to delete
router.delete('/destination/delete/:did', auth.verifyCustomer, function (req, res) {
    const _id= req.params.did;
    
    Destination.findByIdAndDelete(_id )
        .then(function () {
            res.json({ message: "Deleted Successfully", success:true })
        })
        .catch(function(){
            res.json({ message: "Something went wrong!"})
        })
})




module.exports = router;