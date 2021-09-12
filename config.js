// api配置文件，用于配置端口等信息
const apiConfig = {
    port:3000 //端口配置
}
// 数据库配置文件，用于链接数据库
const mysqlConfig = {
    host:"localhost",//数据库地址
    port:"3306",//数据库端口
    user:"root",//数据库登录的用户
    password:"0809",//数据库密码
    database:"test"//数据库
}

module.exports={apiConfig,mysqlConfig}