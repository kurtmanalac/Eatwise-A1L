const mysql = require('mysql');
const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcryptjs = require("bcryptjs")
const app = express.Router()
app.use(cors())

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'useruser',
    database: 'eatwise'
});

// instantiate controllers
const controllerUser = require('./../Controllers/controllerUser.js')
const controllerShop = require('./../Controllers/controllerShop.js')
const controllerReview = require('./../Controllers/controllerReview.js')
const controllerReport = require('./../Controllers/controllerReport.js')


/* FORMAT
app.<method>(<'/path'>, function(req, res, next){
	res.locals.<variable_name> = <variable> // necessary to be able to pass a variable
	next()									// necessary to prevent endless wating for server
}, <controller_name>.<function_name>)		// call function in controller.js
*/

app.get('/', function(req, res, next){
	res.send("Welcome to Eatwise Server!")
	next()
})

app.get('/view-users', function(req, res, next){
		res.locals.connection = connection		
		next()
	}, controllerUser.viewUsers)

app.post('/add-user', function(req, res, next){
		res.locals.connection = connection		
		next()
	}, controllerUser.addUser)

app.put('/update-user', function(req, res, next){
		res.locals.connection = connection		
		next()
	}, controllerUser.updateUser)


app.delete('/delete-user', function(req, res, next){
		res.locals.connection = connection		
		next()
	}, controllerUser.deleteUser)


app.post('/register', (req, res, next) => {
	next()
}, controllerUser.addUser)




module.exports = app








	 

	// connection.end(function(err) {
	//   if (err) {
	//     return console.log('error:' + err.message);
	//   }
	//   console.log('Close the database connection.');
	// })
