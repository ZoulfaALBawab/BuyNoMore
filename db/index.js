var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/BuyNoMore');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("i'm connceted tho!");
});


////////////////////////////////////////////////////////////////////////
 var Schema = mongoose.Schema;
 var users = new Schema({

 	
 	username: {
 		type: String,
 		unique: true,
 		required: true
 	},
 	email: {
 		type: String,
 		unique: true,
 		required: true,
 		trim: true,
 		toLowerCase: true
 	},
 	password: {
  		type: String,
  		required: true
 	},
 	passwordCnf: {
  		type: String
 	}
 	 
 });
////////////////////////////////////////////////////////////////////////
 var Schema = mongoose.Schema;
	var items = Schema({
		itemname: {
			type: String,
			required: true
		},
		owner:{
			type: String,
			required: true
			//OR: Schema.fullname !! 
			//be sure from the function that will connect the 2 db.s
		},
		itemdiscription: {
			type: String,

		},
	 	//Need functionality frokm the routs !!  
	 	priceOption: {
	 		free: {
	 			type: String
	 		},
	 		charge: {
	 			type: String
	 		}
	 	},
	 	address: {
	 		type: String, 
	 		required: true
	 	},
	 	phoneNumber: {
	 		type: String,
	 		required: true
	 	},
	 	pictures: [{
	 		type: String,
	 		required: true
	 	}]
	 	





	 });
////////////////////////////////////////////////////////////////////////
	var Items = mongoose.model('Items', items);
	module.exports.Items = Items;
	var Users = mongoose.model('Users', users);
	module.exports.Users = Users;


