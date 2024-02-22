// import dotenv from "dotenv"
import { connect } from "http2";
import connectionDB from "./src/dbConnection";

const express = require('express');


require('dotenv').config()
const app = express();
const port = 6000

connectionDB().then(
  ()=>{
    app.listen(process.env.PORT||6000,()=>{
      console.log(`[server]: Server is running at http://localhost:${port}`)
    })
  }
).catch((error)=>{
  console.log("Mongo db connection failed!!",error)
})

// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });