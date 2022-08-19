## 1 npm 初始化
npm init -y
生成package.json文件
git init 
生成.git隐藏文件夹，git的本地仓库
## 2 搭建项目
 1.安装koa npm i koa
 2.编写最基本的app
    创建src/main.js 
const Koa=require('koa')
const app=new Koa()
app.use((ctx,next)=>{
    ctx.body='hello world'
})
app.listen(3000,()=>{
    console.log('server is running on http；//localhost:3000')
})
3.项目的基本优化
 1.自动重启服务 安装nodemon npm i nodemon 
    编写package.json脚本
    image.png
 2.读取配置文件
 安装dotenv  读取.env文件将配置写入process.env中
 npm i dotenv

 ## 4 添加路由
 安装koa-router 
  1 导入包
  2创建路由
  3编写路由
    const Router=require('koa-router')
    const router=new Router({prefix:'/users'}) //perfix前缀
    router.get('/',(ctx,next)=>{
        ctx.body='hello users'
    })
module.exports=router
  4 注册中间件
  app.use(userRouter.routes())
  ## 5目录机构优化
  将http服务和app业务拆分
  main.js
  import {APP_PORT} from require('./config/config.default')
const app=require('./app/index.js')
app.use((ctx,next)=>{
    ctx.body='hello world'
})
app.listen(3000,()=>{
    console.log(`server is running on http://localhost:${APP_PORT}`)
})
app/index.js
// 业务代码
const Koa=require('koa')
const app=new Koa()
const userRouter=require('../router/user.route')
app.use(userRouter.routes())
