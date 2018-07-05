var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./db/index.js')
var mongoose = require('mongoose');
var session = require('express-session')
var cookieParser = require('cookie-parser')
var bcrypt = require('bcrypt');
var helper = require('./helper/utility')
var app = express()

 //react connect
 app.use(express.static(__dirname + '/react-client/dist'));

//console.log(__dirname + '/../react-client/dist')

app.get('*', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '/react-client/dist/index.html')));
});

//this is  work
var saltRounds = 10;
/////////////////////////////////////////////////////////////

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/////////////////////////////////////////////////////////////

// app.use(express.static(path.join(__dirname, 'client')))
console.log("here here here ", __dirname)
/////////////////////////////////////////////////////////////

//Be sure !!!
mongoose.Promise = global.Promise;
/////////////////////////////////////////////////////////////

// session ::
	// authinticate transzction between Server and client ..
	app.use(session({
		secret: 'any string of text',
	 resave: false, //even if nothing changed in the files ,, gana save it again ..
	 saveUninitialized: false // for the database
	}));
/////////////////////////////////////////////////////////////

app.use(cookieParser())
app.set('view engine', 'html');
app.set('views',path.join(__dirname,'react-client'))
app.engine('html', require('ejs').renderFile);
///////////////////////////////////////////////////////////
app.get('/maps',function(req,res){

});
app.post('/item/:userId',function(req, res){
  var item = new db.Items;

  var query = db.Users.findById(req.params.userId);
  query.exec(function(err,user){
    if(err){
      res.sendStatus(404)
    };
    if(!user){
      res.sendStatus(404)
    };
    req.body.user = user;
    item.itemName = req.body.itemName;
    item.itemDiscription = req.body.itemDiscription;
    item.owner = req.body.user;

    item.save(function(error,item){
      if(err){
        res.sendStatus(404)
      }else{
        req.body.user.items.push(item);
        req.body.user.save(function(err,user){
          if(err){
            console.log(err)
            res.sendStatus(404)
          } else{
            console.log(user)
            res.sendStatus(200)
          }
        })

      }
    })
  })
});

app.post('/login', function(req,res){
 var fullName = req.body.email;
 var password = req.body.password;
 db.Users.findOne({fullName:fullName}, function(err, data){
  console.log("here's the data", data)
  if(err){
    console.log('login error');
  }
  else {
    if (data === null) {
     console.log('here')
     res.sendStatus(404)
   }
   else {
    bcrypt.compare(password, data.password, function(err, found){
      if(found) {
        helper.createSession(req, res, data.fullName);
      }
      else {
        if (data === null) {
         console.log('here')
         res.sendStatus(404)
       }
       else {
        bcrypt.compare(password, data.password, function(err, found){
          if(found) {
            helper.createSession(req, res, data.username);

          }
          else {
            console.log('session error');
            res.sendStatus(404);

          }
        })
      }
    }
  })
  }}
})
})
///////////////////////////////////////////////////////////
app.post('/register', function(req,res){
	var fullName = req.body.fullName;
  var password = req.body.password;
  var email = req.body.email;
  var confirmPass = req.body.confirmPass;
  db.Users.find({ fullName: fullName }, function(err, data){
    console.log('ashoof el data', data)
    if(err){
     res.sendStatus(402)
   }else{
     if(data.length > 0){
      res.sendStatus(403)
    }
    else{
      bcrypt.genSalt(saltRounds, function(err, salt) {
       if(err){
        console.log('error',err)

      }
      bcrypt.hash(password, salt, function(err, hash) {
       if(err){
        console.log('error in hash password')
        res.sendStatus(404)
      }
      var user = new db.Users({
        fullName:fullName,
        email:email,
        password:hash,
        confirmPass:hash
      })
      user.save(function(err, data){
       if(err){
        console.log(err)
        console.log("khalas men shan allah!")
        res.sendStatus(405)
      }
      else{
        console.log("+++++++")
        res.sendStatus(200)
        //helper.createSession(req, res, data.fullName);
        //res.sendStatus(200);
      }
    })
    });
    });
    }
  }

})
});

//////////////////////////////////////////////////////////////////
app.get('/logout', function(req, res) {
  req.session.destroy(function() {
    res.sendStatus(200);
  });
});
//////////////////////////////////////////////////////////////////


// app.get('/getUser', function (req, res) {

//  db.Users.findOne({fullName:req.session.user}, function(err, data) {
//    if (err) {
//      console.log(err);
//    }
//    else {

//      res.send(data)
//    }
//  })
// })

      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //   app.post('/signup', function(req,res){
    //     console.log(req.body)
    //     var username = req.body.username;
    //     var password = req.body.password;
    //     var email = req.body.email;
    //   //var passwordCnf = passwordCnf;
    //   db.Users.find({ username: username }, function(err, data){
    //     console.log('data shoul be seen', data)
    //     if(err){
    //      res.sendStatus(404)
    //    }else{
    //      if(data.length > 0){
    //       res.sendStatus(404)
    //     }
    //     else{
    //       bcrypt.genSalt(saltRounds, function(err, salt) {
    //        if(err){
    //         console.log('error',err)
    //       }
    //       bcrypt.hash(password, salt, function(err, hash) {
    //        if(err){
    //         console.log('error in hash password')
    //       }
    //       console.log("zzzzzzzzzzzzzzzzzzz",username);
    //       console.log("zzzzzzzzzzzzzzzzzzz",email);
    //       var user = new db.Users({
    //         username:username,
    //         email:email,
    //         password:hash
    //       })
    //       console.log("zzzzzzzzzzzzzzzzzzz",user);
    //       user.save(function(err, data){
    //        if(err){
    //         console.log(err)
    //       }
    //       else{
    //         helper.createSession(req, res, data.username);
    //       }
    //       // if (password!== passwordCnf){
    //       //   res.sendStatus(200);
    //       // }
    //       // else{
    //       //   res.sendStatus(404);
    //       // }
    //     })
    //     });
    //     });
    //     }
    //   }

    // })
    // });

      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      // app.get('/login', function (req, res) {

      // app.get('/login', function (req, res) {

      //   db.Users.findOne({username:req.session.user}, function(err, data) {
      //    if (err) {
      //      console.log(err);
      //    }
      //    else {

      //      res.send(data)
      //    }
      //  })
      // })

      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//blabla

      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Now using promises ::
      //in the obj. of find we will defide whatever we need to call ..
        // here we will ::
      //when find 'for instance' finish ,, then i promise to excute the function inside (then) ..


      //before starting the Search fun. ,, we need to merge the items and add items ..


/////////////////////////
  app.post("/search",function(req,res){
                var data = req.body
            console.log(data,data.itemName)
          db.Items.findOne({itemName : data.itemName},function(err,data){
              if( err ){
                    console.log("you have an err")
                  }
                    console.log(data.itemName,data)
                    var arr = []
                    arr.push(data)
                    res.send(arr)
                   })
    })
        // app.get('/search',function(req,res) {
        //     var data = req.body
        //     console.log(data,data.itemName)
        //     db.Items.findOne({itemName : data.itemName},function(err,data){
        //           if( err ){
        //             console.log("you have an err")
        //           }
        //           console.log(data.itemName,data)
        //           res.send(data)
        //     })
        // })



////////////////////////

      sellectAll: (req, res) => {
        User.find ({},(err, users) =>{
          if (err){
            console.log(err)
          }
          else{
            res.status(200).json(users);
          }
        });
      }

      //before starting the Search fun. ,, we need to merge the items and add items ..
      Search: (req, res) =>{
        Items.find({},(err, items)=> {
          if (err){
            console.log(err)
          }
          else{
            res.status(200).json(items);
          }
        });

      app.post("/addItems",(req, res) => {
        // creat a new item
        var nickname = req.body.nickname;
        var itemName = req.body.itemName;
        var itemDiscription = req.body.itemDiscription;
        var address = req.body.address;
        var phoneNum = req.body.phoneNum;

      var items = new db.Items({
        nickname:nickname,
        itemName:itemName,
        itemDiscription:itemDiscription,
        address:address,
        phoneNum:phoneNum
      })
      items.save(function(err, data){
       if(err){
        console.log(err)
        console.log("khalas men shan allah!")
        res.sendStatus(404)
      }else{
        res.sendStatus(200)
      }

      });
      });


      // the value we get from the customer ,, to be stored in the req. obj.

      // for tetsting : console.log

        //promises::

      // getUserItems: (req, res) => {

      //   const {userId} = req.params;
      //   User.findbyId({userID})
      //   .then (userId => res.status(200).json(UserId))
      //   console.log('user',user);
      // },

      //
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // creat a new item
        const newItem = new Item (req.body);
        console.log('newItem', newItem);
        newItem.save((err, data)=>{
          if(err){
            res.sendStatus(404)
          }
          res.sendStatus(201)(item)
        })
      };

      app.post("/addItems",(req, res) => {
        // creat a new item
        var nickname = req.body.nickname;
        var itemName = req.body.itemName;
        var itemDiscription = req.body.itemDiscription;
        var address = req.body.address;
        var phoneNum = req.body.phoneNum;

      var items = new db.Items({
        nickname:nickname,
        itemName:itemName,
        itemDiscription:itemDiscription,
        address:address,
        phoneNum:phoneNum
      })
      items.save(function(err, data){
       if(err){
        console.log(err)
        console.log("khalas men shan allah!")
        res.sendStatus(404)
      }else{
        res.sendStatus(200)
      }

      });
      });

      /////////////////////////////////////////////////////////////////
      //Catch 404 Errors and forward them to error handler ::
      app.use(function(req, res, next){
        var err = new Error ('Error !! ');
        err.status = 404;
        next(err);

      });
      ///////////////////////////////////////////////////////////
      //Error handler function ::
      app.use(function(err, req, res, next){
        var error = app.get('env');
        if (error === 'development'){
         return error
       }
       return {}

       var status = err.status;
       status = err.status || 500;

      	//Respond to client

      	res.status(status).json({
      		error : {
      			message: error.message
      		}
      	});
      	// Respond for testing

      	console.log(err);
      });

      /////////////////////////////////////////////////////////////

      var port = process.env.PORT || 3000;
      app.listen(port, function (){ console.log("I'm listining tho!" + " " + port)})


      //_____________________ DONE :D ____________________//
