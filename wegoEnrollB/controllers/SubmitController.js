var express = require('express');
var info= express.Router();

var SubmitService=require('../models/SubmitService');

info.get('/submitInfo', async function(req, res, next) {
    let message=req.query;
    let result=await  SubmitService.checkStuNum(message.stuNum);
    let back;
    if(!result.state){
        back=await SubmitService.submit(message);
        res.json(back);
    }else {
        result.msg='该学号已参与报名，有问题请向官方反馈';
        result.state=0;
        res.json(result);
    }
});

info.get('/userLogin', async function(req, res, next) {
    let all=req.query;
    let back=await SubmitService.checkStu(all.name,all.stuNum);
    res.json(back);

});

info.get('/updateInfo',async function(req, res, next) {
    let all=req.query;
    let back=await SubmitService.updateStu(all);
    res.json(back);

});

module.exports=info;