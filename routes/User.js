var User = require('../models/user.js');
var mongoose = require('mongoose');
var db = require('../config/db');
var userToSend;
//mongoose.connect(db.url);
module.exports = function(app){
	var sess;
	app.post('/newUser', function(req, res){
		var newUser = new User({
			firstName : req.body.firstName,
			lastName  : req.body.lastName,
			username  : req.body.username,
			email     : req.body.email,
			password  : req.body.password
		});
		newUser.save(function(err){
			if(err){
				return res.redirect('/')
			}
			res.redirect('/');
		});
	});

	app.post('/log', function(req, res){
		var username = req.body.username;
		var password = req.body.password;
		userToSend = User.findOne({username: username, password: password}, function(err, user){
			if(err){
				return res.redirect();
			}
			if(!user){
				return res.redirect('/');
			}
			sess = req.session;
			sess.username = username;
			res.redirect('/');
			//res.render('index', {msg : username});
		});
	});
}