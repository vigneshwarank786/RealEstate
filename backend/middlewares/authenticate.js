const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/authModel");

exports.isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Login First to Handle This Resuorce"));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id);

  next();
});





exports.authorizeRoles=(...roles)=>{

    return (req,res,next)=>{

        if(!roles.includes(req.user.role))
        {
            return next(new ErrorHandler(`Role ${req.user.role} is not allowed`,401))
        }

        next()
    }

}
