var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./db/index.js')
var mongoose = require('mongoose');
var session = require('express-session')
var cookieParser = require('cookie-parser')

var bcrypt = require('bcrypt');
var util = require('./helper/utility')
var app = express()

console.log(db.Items)

// var saltRounds = 10;
// /////////////////////////////////////////////////////////////
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// /////////////////////////////////////////////////////////////
// // app.use(express.static(path.join(__dirname, 'client')))
// console.log("here here here ", __dirname)
// /////////////////////////////////////////////////////////////
// //Be sure !!!
// mongoose.Promise = global.Promise;
// /////////////////////////////////////////////////////////////
// // session :: 
// 	// authinticate transzction between Server and client ..  
// 	app.use(session({
// 		secret: 'any string of text', 
// 	 resave: true, //even if nothing changed in the files ,, gana save it again .. 
// 	 saveUninitialized: false // for the database 
// 	}));
// /////////////////////////////////////////////////////////////
// app.use(cookieParser())
// app.set('view engine', 'html');
//  app.set('views',path.join(__dirname,'client'))
// app.engine('html', require('ejs').renderFile);
/////////////////////////////////////////////////////////////
// app.post('/login', function(req,res){
//  var username = req.body.username;
//  var password = req.body.password;
//  db.Users.findOne({username:username}, function(err, data){
//   console.log("here's the data", data)
//   if(err){
//     console.log('login error');
//   }
//   else {
//     if (data === null) {
//      console.log('here')
//      res.sendStatus(404)
//    }
//    else {
//     bcrypt.compare(password, data.password, function(err, found){
//       if(found) {
//         helper.createSession(req, res, data.username);
        
//       }
//       else {
//         console.log('session error');
//         res.sendStatus(404)
        
//       }
//     })
//   }

// }
// })
 
// })
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//Catch 404 Errors and forward them to error handler ::
	// app.use(function(req, res, next){
	// 	var err = new Error ('Error !! ');
	// 	err.status = 404;
	// 	next(err);

	// });
/////////////////////////////////////////////////////////////
//Error handler function ::
	// app.use(function(err, req, res, next){
	// 	var error = app.get('env');
	// 	if (error === 'development'){
	// 		return error
	// 	}
	// 	return {}

	// 	var status = err.status;
	// 	status = err.status || 500;

	// 	//Respond to client 

	// 	res.status(status).json({
	// 		error : {
	// 			message: error.message
	// 		}
	// 	});
	// 	// Respond for testing 

	// 	console.log(err);	
	// });


var port = process.env.PORT || 3000;
app.listen(port, function (){ console.log("I'm listining tho!" + " " + port)})




/////////////////////////////////////////////////////////////
