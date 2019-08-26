var mysql=require('../config/NodeMysql');

let service={};
service.submit=async (message)=>{

    var result={};
    result.state=0;
    try {

        let res=await mysql.query("insert into info (name,sex,major,class_num,stu_num,phone,reward,hobby,summary) values (?,?,?,?,?,?,?,?,?) ",
            [message.name,message.sex,message.major,message.classNum,message.stuNum,message.phone,message.reward,message.hobby,message.summary]);
        // console.log(res);
        result.state=1;

    }catch (err) {
        console.log(err);
    }finally
    {
        return result;
    }



};

service.checkStu=async (name,stuNum)=> {
    var result = {};
    result.state = 0;
    try {
        console.log(name);
        console.log(stuNum);
        let res = await mysql.query("select * from info where name=? and stu_num=? ",
            [name, stuNum]);
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
};

service.checkStuNum=async (stuNum)=>{
    var result = {};
    result.state = 0;
    try {
        console.log(stuNum);
        let res = await mysql.query("select * from info where stu_num=? ",
            [stuNum]);
        console.log(res);
        if (res.length) {
            // result.content=res;
            result.state = 1;
        }
    } catch (err) {
        console.log(err);
    }finally {
        return result;
    }
}

service.updateStu=async (message)=>{
    var result = {};
    result.state = 0;
    try {
        let res = await mysql.query("update info set sex=? ,major=? ,class_num=?, phone=? ,reward=? ,hobby=?, summary=? where stu_num=?",
            [message.sex,message.major,message.classNum,message.phone,message.reward,message.hobby,message.summary,message.stuNum]);
        console.log(res);
        result.state = 1;

    } catch (err) {
        console.log(err);
    }finally {
        return result;
    }
}

module.exports=service;
