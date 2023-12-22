const mongoose = require("mongoose");
const dotenv = require('dotenv');
const path=require('path')

dotenv.config({path:path.join(__dirname,'./config.env')})


const connectedDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((con) => {
        console.log(`Using URI: ${process.env.DB_LOCAL_URI}`);
    })

};

module.exports = connectedDatabase;
