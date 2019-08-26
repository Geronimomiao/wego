var express = require('express');
var info= express.Router();

var LoginService=require('../models/LoginService');

info.get('/login', async function(req, res, next) {
    let username=req.query.username;
    let password=req.query.password;
    let back=await LoginService.login(username,password);
    res.json(back);

});

module.exports=info;