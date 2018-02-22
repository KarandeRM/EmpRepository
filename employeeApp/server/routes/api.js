const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Empmodel = require('../models/empmodel')

const db = "mongodb://localhost:27017/empdb";

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("error!"+err);
    }
    else{
        console.log("db connection is successful");
    }
});

router.get('/employees', function(req, res){
   console.log("get request for all the employees");
   Empmodel.find({})
   .exec(function(err, employees){
       if(err){
           console.log("error in retriving employees");
       }
       else{
           res.json(employees)
       }
   });
});

router.get('/employee/:id', function(req, res){
    console.log("get request for all the employees");
    Empmodel.findById(req.params.id)
    .exec(function(err, employee){
        if(err){
            console.log("error in retriving employees");
        }
        else{
            res.json(employee)
        }
    });
 });

 router.post('/employee', function(req, res){
     console.log("posting new the employee deatils");
     var newEmp = new Empmodel();
     newEmp.name= req.body.name;
     newEmp.dob = req.body.dob;
     newEmp.age = req.body.age;
     newEmp.address =  req.body.address;

     newEmp.save(function(err, insertedemp){
         if(err){
             console.log("errror in adding employee")
         }
         else{
             res.json(insertedemp)
         }
     });
 });

 router.put('/employee/:id', function(req, res){
    console.log('Update a employeee');
    Empmodel.findByIdAndUpdate(req.params.id,
    {
        $set: {name: req.body.name, dob: req.body.dob, age: req.body.age, address : req.body.address}
    },
    {
        new: true
    },
    function(err, updatedemp){
        if(err){
            res.send("Error updating employee");
        }else{
            res.json(updatedemp);
        }
    }

    );
});



module.exports = router;
