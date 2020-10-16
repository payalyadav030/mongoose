// model loader  utility function

const mongoose = require('mongoose')

const User = require('./User.js')

// //conection to mongodb
// function connect(){
//    return mongoose.connect('mongodb://localhost:27017/test-eagle', {
//         useNewUrlParser : true
//     });
// }

module.exports = {
    models : {
        User: User
    },
    connect : function (){
           return mongoose.connect('mongodb://localhost:27017/test-eagle', {
                useNewUrlParser : true,
                useUnifiedTopology:true
            });
        }
        
};
