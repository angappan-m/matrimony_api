const express = require('express');
const router = express.Router();
const MarimonyUserCollection = require('../Schemes/userSchema');

router.post('/reg_user',(req,res,next) => {
    new MarimonyUserCollection({
        name : req.body.name,
        pass: req.body.pass,
        dob: req.body.dob,
        fname: req.body.fname,
        occup: req.body.occup,
        designation: req.body.designation,
        org: req.body.org,
        off_add: req.body.off_add,
        state: req.body.state,
        district: req.body.district,
        pincode: req.body.pincode,
        phone: req.body.phone,
        email: req.body.email,
        pc_add: req.body.pc_add,
        eduqual: req.body.eduqual,
        bobbies: req.body.bobbies,
        aadhar_no: req.body.aadhar_no
    }).save().then((result)=> {
        console.log(result);
        res.json({'message': 'Registration Successful','status': true});
    }).catch((err)=>{
        console.log(err+'<-----');
        next(err);
        res.json({'message': 'Registration Failed','status': false});
    });
})

router.post('/login',(req,res,next) => {
    try{
        data = {"email": req.body.email,"pass": req.body.pass};
        MarimonyUserCollection.findOne(data).then((result) => {
            res.json({'message':'Login Successful','status': true});
        }).catch((err) => {
            res.json({'message':'Login failed','status': false});
            next(err);
        });
    }catch(e){
        console.log(e);
    }
})

module.exports = router;