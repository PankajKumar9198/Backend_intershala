const mongoose = require("mongoose");
require('dotenv').config()
DATABASEURL = process.env.DATABASEURL
module.exports.connect=()=>{
    mongoose.connect(DATABASEURL,console.log("Database is connected"))
}