const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const crypto=require('crypto');


const auth=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Please enter your username'],
        unique:true,
    },
    email:{
        type:String,
        required:[true,'Please enter your email'],
        unique:true,
        validate:[validator.isEmail, 'Please enter valid email address']
    },
    password:{
        type:String,
        required:[true,'Please enter valid password'],
        maxlength: [8, 'Password cannot exceed 8 characters'],
        select:false
    },
    avatar:{
        type:String,
    },
    role:{
        type:String,
        default:'user'
    },
    resetPasswordToken: String,
    resetPasswordTokenExpire: Date,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})


auth.pre('save', async function (next){
    if(!this.isModified('password')){
        next();
    }
    this.password  = await bcrypt.hash(this.password, 10)
})

auth.methods.getJwtToken = function(){
    return jwt.sign({id: this.id}, process.env.JWT_SECRET, {
         expiresIn: process.env.JWT_EXPIRES_TIME
     })
 }

 auth.methods.isValidPassword = async function(enteredPassword){
    const data= await bcrypt.compare(enteredPassword, this.password);
    return data;
}

auth.methods.getResetToken = function(){
    //Generate Token
    const token = crypto.randomBytes(20).toString("hex");

    console.log(token,"token 1");

    //Generate Hash and set to resetPasswordToken
   this.resetPasswordToken =  crypto.createHash('sha256').update(token).digest("hex");
   console.log(this.resetPasswordToken,"auth resetPasswordToken");

   //Set token expire time
    this.resetPasswordTokenExpire = Date.now() + 30 * 60 * 1000;

    console.log(token,"token 2");


    return token
}





let model=mongoose.model('user',auth);

module.exports=model;