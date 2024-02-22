import mongoose from "mongoose";
import {DB_NAME} from '../constants'
const connectionDB=async ()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        // the connection instance below is used to indicate the connection of db at host
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
        // console

    }catch(error){
        console.log("error in connection")
        process.exit(1)
    }
}
export default connectionDB