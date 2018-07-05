var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/BuyNoMore');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("i'm connceted tho!");
});


// ////////////////////////////////////////////////////////////////////////
//  var Schema = mongoose.Schema;
//  var users = new Schema({



//  	fullName: {
//  		type: String,
//  		required: true,
//  	},

//  	email: {
//  		type: String,
//  		unique: true,
//  		required: true,
//  		trim: true,
//  		toLowerCase: true
//  	},
//  	password: {
//   		type: String,
//   		required: true
//  	},
//  	confirmPass: {
//   		type: String,
//   		required: true
//  	}

//  });
// ////////////////////////////////////////////////////////////////////////
//  var Schema = mongoose.Schema;
// 	var items = Schema({
// 		nickname:{
// 			type: String,
// 			required: true
// 			//OR: Schema.fullname !!
// 			//be sure from the function that will connect the 2 db.s
// 		},
// 		itemName: {
// 			type: String,
// 			required: true
// 		},

// 		itemDiscription: {
// 			type: String,

// 		},
// 	 	//Need functionality frokm the routs !!

// 	 	address: {
// 	 		type: String,
// 	 		required: true
// 	 	},
// 	 	phoneNum: {
// 	 		type: String,
// 	 		// required: true
// 	 	},
// 	 	pictures: [{
// 	 		type: String,
// 	 		// required: true
// 	 	}]

// 	 });




////////////////////////////////////////////////////////////////////////
var Schema = mongoose.Schema;

var userSchema = new Schema({
 	fullName: {
 		type: String,
 		required: true,
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
 	confirmPass: {
  		type: String,
  		required: true
 	},
 	Latitude: {
 		type: String,
 	},
 	Longitude: {
 		type: String,
 	},
 	phoneNum: {
 		type: String,
	 },
	items: [{
		type: Schema.Types.ObjectId,
		ref: Items
	}]
});
////////////////////////////////////////////////////////////////////////
	var itemSchema = Schema({
		itemName: {
			type: String,
			required: true
		},
		itemDiscription: {
			type: String,
		},
		owner:{
			type: Schema.Types.ObjectId,
			ref: 'Users'
		},
		borrower:{
			type: Schema.Types.ObjectId,
			ref: 'Users'
		}

	 });
////////////////////////////////////////////////////////////////////////
	var Users = mongoose.model('Users', userSchema);
	module.exports.Users = Users;

	var Items = mongoose.model('Items', itemSchema);
	module.exports.Items = Items;