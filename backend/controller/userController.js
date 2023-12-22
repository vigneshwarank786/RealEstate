const authModel = require("../models/authModel");
const sendToken = require("../utils/jwt");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const sendEmail = require("../utils/email");
const crypto=require('crypto');


//Register-/register
exports.createUser = catchAsyncError(async (req, res, next) => {
  const { username, email, password } = req.body;
  let avatar;

  if (req.file) {
    avatar = `${process.env.Backend_URL}/uploads/user/${req.file.originalname}`;
  }

  const user = await authModel.create({
    username,
    email,
    password,
    avatar,
  });

  sendToken(user, 201, res);
});

//Login-/login
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Invalid Email Or Password", 400));
  }

  const user = await authModel
    .findOne({ $or: [{ username: email }, { email: email }] })
    .select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email Or Password", 401));
  }
  const valid = await user.isValidPassword(password);

  if (!valid) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  sendToken(user, 201, res);
});

//Admin - /admin/getAllUsers
exports.getAllUsers = catchAsyncError(async (req, res, next) => {
  const user = await authModel.find();

  res.status(200).json({
    user,
  });
});



//Forgot Password - /password/forgot
exports.forgotPassword = catchAsyncError( async (req, res, next)=>{
  const user =  await authModel.findOne({email: req.body.email});

  if(!user) {
      return next(new ErrorHandler('User not found with this email', 404))
  }

  const resetToken = user.getResetToken();
console.log(resetToken,"resetToken forgotpass function");

  await user.save({validateBeforeSave: false})
  
  let BASE_URL = process.env.FRONTEND_URL;
  if(process.env.NODE_ENV === "production"){
      BASE_URL = `${req.protocol}://${req.get('host')}`
  }


  //Create reset url
  const resetUrl = `${BASE_URL}/password/reset/${resetToken}`;

  const message = `Your password reset url is as follows \n\n ${resetUrl} \n\n If you have not requested this email, then ignore it.`;

  try{
      sendEmail({
          email: user.email,
          subject: "Estate Password Recovery",
          message
      })

      res.status(200).json({
          success: true,
          message: `Email sent to ${user.email}`
      })

  }catch(error){
      user.resetPasswordToken = undefined;
      user.resetPasswordTokenExpire = undefined;
      await user.save({validateBeforeSave: false});
      return next(new ErrorHandler(error.message), 500)
  }

})  

//Reset Password - /api/v1/password/reset/:token
exports.resetPassword = catchAsyncError( async (req, res, next) => {

  const resetPasswordToken =  crypto.createHash('sha256').update(req.params.token).digest("hex"); 

  console.log(resetPasswordToken,"resetpasswprd12 hash");

   const user = await authModel.findOne( {
       resetPasswordToken,
       resetPasswordTokenExpire: {
           $gt : Date.now()
       }
   } )

   if(!user) {
       return next(new ErrorHandler('Password reset token is invalid or expired'));
   }

   if( req.body.password !== req.body.confirmPassword) {
       return next(new ErrorHandler('Password does not match'));
   }

   user.password = req.body.password;
   user.resetPasswordToken = undefined;
   user.resetPasswordTokenExpire = undefined;
   await user.save({validateBeforeSave: false})
   sendToken(user, 201, res)

})




//Logout - /logout
exports.logoutUser = (req, res, next) => {
  res
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .status(200)
    .json({
      success: true,
      message: "Loggedout",
    });
};
