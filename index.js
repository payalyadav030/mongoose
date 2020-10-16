// mongoose: bridge between mongodb data and application
//   -> it helps to create a struture for our collection with the help of schema,
//   -> schema : it is nothing but structure of our collection
//  Mongoose provides a straight-forward, schema-based solution to model your application data. It includes
//  built-in type casting, validation, query building, business logic hooks, and more out of the box.
//   
//   validation means - checking the data struture against the cofriguation(schema)
//

//************************************************************************* //

const chalk = require('chalk');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const PORT = 6578;
const db = require('./models/index.js');
// console.log(db)
// console.log(db.models)
// console.log(db.connect)



app.use(express.json());
app.use('/static', express.static('public'))


const hbs = exphbs.create({
    extname: '.hbs'
})

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs')

//import controllers
const controllers = require('./routes/index.js')


// routes
app.post('/user/create', controllers.UserController.create)



db.connect()
.then(function(r){
    app.listen(PORT, function(){
        console.log("Your application has been started ton port:", PORT)
    }).on('error', function(error ){
        console.log("unable to stard the app", error )
    })
})
.catch(function(error){
    console.log("failed to set up connection", error)
})


