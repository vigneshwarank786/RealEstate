const express=require('express');
const router=require('./routes/auth')
const path=require('path');
const bodyParser = require('body-parser');
const errormiddleware=require('./middlewares/error')
const cookieparser=require('cookie-parser');

const app=express();

app.use(bodyParser.json());
app.use(cookieparser())


app.use('/uploads', express.static(path.join(__dirname,'uploads') ) )

app.use('/',router)





app.use(errormiddleware)

module.exports=app;