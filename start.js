var koa = require("koa")//koa主体程序
var route=require('koa-route')//配置路由
var koaBody=require('koa-body')// 解析post请求会用到koa-body
let app = new koa()
let {apiConfig} = require('./config')
app.use(koaBody())
// 连接上数据库
let connection = require('./mysql/content')
connection.connect()
// 获取api主体程序
let api = require('./api/index')

app.use(route.get('/helloworld',api.helloWorld))
app.use(route.get('/helloSql',api.helloSql))

console.log("服务器开启中，端口是"+apiConfig.port)

app.listen(apiConfig.port)