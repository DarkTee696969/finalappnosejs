const mongoose = require('mongoose');

const posttestschema = new mongoose.Schema({
    title: {type: String , required: true},
    content: {type: String , required: true},
    address: {type: String , required: true},
    tel: {type: String , required: true},
    message: {type: String , required: true},
    date: {type: Date , required: true},
},{timestamps:true , versionKey:false});

module.exports = mongoose.model('Posttest', posttestschema);


