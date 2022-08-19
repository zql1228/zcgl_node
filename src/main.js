const {APP_PORT}=require('./config/config.default')
const app=require('./app/index.js')
app.use((ctx,next)=>{
    ctx.body='hello world'
})
app.listen(3000,()=>{
    console.log(`server is running on http://localhost:${APP_PORT}`)
})
