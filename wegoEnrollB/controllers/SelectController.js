var express = require('express');
const jwt= require('jsonwebtoken');
const expressJwt = require('express-jwt');
const jwtConfig=require('../config/jwtConfig');

var info= express.Router();

var SelectService=require('../models/SelectService');

info.get('/selectAll', async function(req, res, next) {

    let token=req.query.token;
    if(token){
        jwt.verify(token, jwtConfig.jwtsecret, async function (err, decoded) {
            if (err) {
                return res.json({state: 0, message: '无效的token.'});
            } else {
                // 如果验证通过，在req中写入解密结果
                req.decoded = decoded;
                //console.log(decoded)  ;
                let back=await SelectService.selectAll();
                back.decoded = decoded;
                res.json(back);
            }
        });

    }else {
        return res.json({ state:0 , message: 'token不存在.' })
    }



});

info.get('/selectByNameOrStuNum', async function(req, res, next) {
    let token=req.query.token;
    let parm=req.query;
    if(token){
        jwt.verify(token, jwtConfig.jwtsecret, async function (err, decoded) {
            if (err) {
                return res.json({state: 0, message: '无效的token.'});
            } else {
                // 如果验证通过，在req中写入解密结果
                req.decoded = decoded;
                //console.log(decoded)  ;
                let back=await SelectService.selectByNameOrStuNum(parm);
                back.decoded = decoded;
                res.json(back);
            }
        });

    }else {
        return res.json({ state:0 , message: 'token不存在.' })
    }



});


module.exports=info;