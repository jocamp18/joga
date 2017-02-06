// app/routes.js

// grab the nerd model we just created

/*var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://jocamp18:lfmDXW84@ds033259.mlab.com:33259/jogadb',['matches']);

router.get('/matches',function(req, res, next){
    db.matches.find(function(err, matches){
        if(err){
            res.send(err);
        }
        res.json(matches);
    })
});*/



var Match = require('../models/match');
var mongoose = require('mongoose');
var db = require('../config/db');
mongoose.connect(db.url); 
    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes
        var sess;
        app.post('/newMatch', function(req, res){
            sess = req.session;
            var username = sess.username;
            console.log(req.body.position);
            var newMatch = new Match({
                username: username,
                position: req.body.position,
                date    : req.body.date,
                time    : req.body.time1
            });
            newMatch.save(function(err){
                if(err) throw err;
                res.redirect('/');
            });
        });
        app.get('/myMatches', function(req, res){
            sess = req.session;
            var username = sess.username;
            if(username){
                Match.find({username: username}, function(err, matches){
                    if(err){
                        res.send(err);
                    }
                    res.json(matches);
                })
            }
        })
        // sample api route
        app.get('/api/matches', function(req, res) {
            // use mongoose to get all nerds in the database
            Match.find({},function(err, docs) {
                if (err)
                    res.send(err);
                res.json(docs);
                //res.render('index', {matches: docs}); // return all nerds in JSON format
            });
            
        });

        app.post('/deleteMatch/:id', function(req, res) {
            var id = req.params.id;
            Match.findOneAndRemove({"_id": id}, function (err) {
                if(err) throw err;
            })
            Match.find({},function(err, docs) {
                if (err)
                    res.send(err);
                res.json(docs);
                //res.render('index', {matches: docs}); // return all nerds in JSON format
            });  
        })

        app.post('/update', function(req, res){
            var id = req.body.identifier;
            Match.findOneAndUpdate({"_id": id},{position: req.body.position, date: req.body.date, time: req.body.time1}, function (err, result) {
                res.redirect('/');
            })

        })

        app.get('/logout', function(req, res) {
            req.session.destroy(function(err){
                res.redirect('/');
            })
        });
        app.get('/username', function(req, res){
            res.send(sess.username);
        })
        app.get('/username', function(req, res){
            res.send(sess.username);
        })

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('../public/index.html'); // load our public/index.html file
        });

    };