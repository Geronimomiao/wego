var express = require('express');

//导入Controller
var SubmitController=require('../controllers/SubmitController');
var SelectController=require('../controllers/SelectController');
var ManageController=require('../controllers/LoginController');
module.exports = function (app) {
    //一个get请求的路由  http://localhost:3000
    app.get("/", function (req, res) {
        res.render("index", {title:"NodeTest"})
    });

    //注册Controller
    //删除动态
    app.use("/submit",SubmitController);
    app.use("/select",SelectController);
    app.use("/manage",ManageController)

}
