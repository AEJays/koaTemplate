/**
 * 说明：mysql数据库连接
 * 调用方法：在你的项目中直接加入下面一行
 * let connection = require("../mysql/content")
 * 即可
 * 使用方法：
 * let res = await new Promise((resolve,reject)=>{
 *  connection.query("select * from test",(error,result,filed)=>{
 *      if(error) return error;
 *      resolve(result)
 *  })
 * })
 * 就能得到查询出来的值了
 */
let {mysqlConfig} = require('../config')
let mysql=require('mysql')
let connection=mysql.createConnection({
    host:mysqlConfig.host,//数据库地址
    user:mysqlConfig.user,//用户
    password:mysqlConfig.password,//密码
    port:mysqlConfig.port,//数据库端口，可选，默认3306
    database:mysqlConfig.database,//数据库
})

module.exports=connection