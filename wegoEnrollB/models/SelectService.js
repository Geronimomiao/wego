var mysql=require('../config/NodeMysql');

let service={};

service.selectAll=async ()=>{
    var result = {};
    result.state = 0;
    try {

        let res = await mysql.query("select * from info ");
        console.log(res);
        if (res.length) {
            result.content=res;
            result.state = 1;
        }
    } catch (err) {
        console.log(err);
    }finally {
        return result;
    }
}

service.selectByNameOrStuNum=async (data)=>{
    var result = {};
    result.state = 0;
    try {

        let res = await mysql.query("select * from info where name = ? or stu_num= ?",[data.val, data.val]);
        console.log(res);
        if (res.length) {
            result.content=res;
            result.state = 1;
        }
    } catch (err) {
        console.log(err);
    }finally {
        return result;
    }
}

module.exports=service;