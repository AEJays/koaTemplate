### 作者
AEdge

### koa官网
https://koa.bootcss.com/#links

### koa模板
包含基础数据库链接，拥有初始例子

### 安装
npm i

### 开启命令
npm start

### 默认端口
3000

### 常见问题解决
#### 为什么我执行了npm start之后会出错？
因为你并没有进入config.js更改数据库配置导致的，你需要将数据库配置更改为你自己的数据库地址及其用户密码才可使用
#### 如何更改端口？
进入config.js中，修改apiConfig的port属性，为你想要开启的端口
#### 如何使用api？
以helloworld api为例，访问 GET http://localhost:3000/helloWorld 即可获取简单实例
#### helloSqlApi无法使用？
前往api所在地址 ./api/index.js 找到 helloSql中 select  * from test 将 test 更改为数据库表即可，当然，select * from test 也可更改为其他mysql的查询语句

如果你觉得这个模板可以帮你解决很多困扰，那就帮忙点一下Star，谢谢