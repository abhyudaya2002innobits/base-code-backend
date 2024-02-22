import express from 'express'
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,

}))
// to configue json data
app.use(express.json({limit:"16kb"}))
// to configure data that comes from url
app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))
app.use(cookieParser())