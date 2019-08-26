var mysql=require('../config/NodeMysql');
const jwt= require('jsonwebtoken');
const expressJwt = require('express-jwt');
const jwtConfig=require('../config/jwtConfig');

let login={};
login.login=async (username,password)=>{

    var result={};
    result.state=0;
    try {
        console.log(username)
        let res=await mysql.query("select * from manage where username=? and password=? ",[username,password]);
        console.log(res);
        if(res.length){
            result.state=1;
            result.token=jwt.sign({
                name: username,
                data: "============="
            }, jwtConfig.jwtsecret, {
                expiresIn: 60 * 60 * 24 //授权时效
            });
            result.data=res;
            console.log(result)
        }


    }catch (err) {
        console.log(err);
    }finally {
        return result;
    }

}

module.exports=login;
