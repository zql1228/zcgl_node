const Router=require('koa-router')
const router=new Router({prefix:'/user'}) //perfix前缀
const {register} =require('../controller/user.controller')
router.get('/register',register)
module.exports=router