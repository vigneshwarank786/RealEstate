const app=require('./app');
const dotenv=require('dotenv');
const path=require('path')
const connection=require('./config/database');



connection()

dotenv.config({path:path.join(__dirname,'./config/config.env')})



const server=app.listen(process.env.PORT,()=>{
    console.log(`The sucessfully running my port on ${process.env.PORT}`)
})

process.on('unhandledRejection',(err)=>{
    console.log(`Error:${err.message}`);
    console.log('shutting down the server due to unhandled rejection');
    server.close(()=>{
        process.exit(1);
    })
})

process.on('uncaughtException',(err)=>{
    console.log(`Error:${err.message}`);
    console.log('shutting down the server due to uncaughtException');
    server.close(()=>{
        process.exit(1);
    })
})