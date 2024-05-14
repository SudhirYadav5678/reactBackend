import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser"; 


const app= express()
// these are server configuration for differnet works.
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))// cors is used for cross origin configurations. // process.env.CORS_ORIGIN provide which domain request can access backend. #forntend and backend connection
app.use(express.json({limit:"100mb"}))//express.json()
app.use((express.urlencoded({limit:"100mb"})))  // url incorder for url understanding.
app.use(cookieParser())

export default app;