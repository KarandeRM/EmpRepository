const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const empSchema = new Schema({
    name: String,
    dob: String,
    age: Number,
    address: String
});

module.exports = mongoose.model('empmodel', empSchema, 'employee');