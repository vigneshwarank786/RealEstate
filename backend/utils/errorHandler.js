class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode=this.statusCode || 500;
        Error.captureStackTrace(this,this.constructor)
    }
}


module.exports=ErrorHandler;