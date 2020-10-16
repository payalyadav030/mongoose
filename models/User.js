// string number boolen date are reserved keywords

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true,
        unique:true
    },
    phone : {
        type: String,
        required: false,
        unique:true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password :{
        type: String,
        required: true
    },
    dateOfBirth : {
        type: String,
        required: false
    },
    verified : {
        type : Boolean,
        default: false
    },
    createdAt : {
        type: Date,
        default: (new Date())
    },
    updatedAt : {
        type : Date,
        default: (new Date())
    }
},{
    collection: 'users'
});

// binding the schema with user
const User = mongoose.model('User', userSchema);


module.exports = User;