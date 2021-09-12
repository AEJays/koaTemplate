
let connection = require('../mysql/content')

// 功能：查询数据库
let helloSql = async(ctx,next)=>{
    // 异步，promise获取
    let res = await new Promise((resolve,reject)=>{
        // 链接，使用数据库语句
        connection.query('select * from 测试表',(error,result,filed)=>{
            if(error) return error
            resolve(result)
        })
    })
    ctx.response.body = {code:200,msg:"调用数据库成功",data:res}
}

// 功能：简单输出HelloWorld（初学者使用）
let helloWorld = async (ctx,next)=>{
    var text = "Hello World!"
    ctx.response.body={code:200,msg:"调用成功！",data:text}
}

module.exports = {helloSql,helloWorld}