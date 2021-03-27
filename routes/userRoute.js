const express = require('express');
const router = express.Router();
const MarimonyUserCollection = require('../Schemes/userSchema');

router.post('/reg_user',(req,res,next) => {
    new MarimonyUserCollection({
        name: req.body.name,
        fname: req.body.fname,
        occup: req.body.occup,
        designation: req.body.designation,
        org: req.body.org,
        org_type: req.body.org_type,
        off_add: req.body.off_add,
        disctrict: req.body.district,
        pincode: req.body.pincode,
        state: req.body.state,
        phone: req.body.phone,
        fax: req.body.fax,
        email: req.body.email,
        pc_add: req.body.pc_add,
        dob: req.body.dob,
        blood_group: req.body.bood_group,
        eduqual: req.body.eduqual,
        hobbies: req.body.hobbies,
        spouse_name: req.body.spouse_name,
        spouse_occup: req.body.spouse_occup,
        spouse_dob: req.body.spouse_dob,
        spouse_add: req.body.spouse_add,
        spouse_district: req.body.spouse_district,
        spouse_pincode: req.body.spouse_pincode,
        spouse_state: req.body.spouse_state,
        spouse_phone: req.body.spouse_phone,
        spouse_tax: req.body.spouse_tax,
        spouse_pan: req.body.spouse_pan,
        spouse_aadhar: req.body.spouse_aadhar,
        like_ylf_host: req.body.like_ylf_host,
        club_org_mem: req.body.club_org_mem,
        reg_date: req.body.reg_date
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
            if(result) {
                res.json({'message':'Login Successful','status': true,'data': [result]});
            }else{
                res.json({'message':'Login Failed','status': false,'data': [result]});
            }
        }).catch((err) => {
            res.json({'message':'Login failed','status': false,'error': [err]});
            next(err);
        });
    }catch(e){
        console.log(e);
    }
})

module.exports = router;