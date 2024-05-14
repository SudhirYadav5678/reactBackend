//require('dotenv').config({path:"./env"})
import dotenv from "dotenv"
import dbConnectionConfig from "./dbConnection/DBConnection.js"
import app from "./app.js"

dotenv.config({path:"./env"})
dbConnectionConfig()
.then((error)=>{
    app.on(error, (error)=>{console.log("app is not connected with database",error); })
    app.listen(process.env.PORT || 8000);
    console.log("app/server is open in Port ",process.env.PORT);
})
.catch((error)=>{console.log("error with server site", error);
    throw error
})