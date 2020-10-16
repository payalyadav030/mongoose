const User = require('./../models/User.js')
const moment = require('moment')

const UserController = {};

UserController.create = function(req, res){
    var data = req.body
   User.create({
       username : data.username,
       name : data.name,
       email : data.email,
       phone: data.phone,
       password: data.password,
       dateOfBirth : data.dateOfBirth
   }, function(error, response){
       if(error){
           console.log("error", error)
           return res.status(500).send( {
               status: false,
               message: "failed to create user",
               error: error

           })
       }
       return res.status(200).send( {
           status: true,
           message: "created successfuly",
           data: response
       })
   })
}

UserController.ban = function(){

}
UserController.verify = function(){

}
UserController.delete = function(){

}
UserController.update = function(){

}
UserController.retrieve = function(){

}

module.exports = UserController;
