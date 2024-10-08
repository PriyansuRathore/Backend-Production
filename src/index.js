import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
// import express from "express"
// const app = express()
import { app } from "./app.js";
dotenv.config({
    path:'./.env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT|| 8000,()=>{
        console.log(`Server is running at port : ${
            process.env.PORT }`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!" ,err);
})














// import express from "express";

// const app = express();

// (async () => {
//     try {
//         // Corrected mongoose.connect call
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         // App error handling should be separate
//         app.on("error", (error) => {
//             console.log("ERROR: ", error);
//             throw error;
//         });

//         // Starting the server
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         });

//     } catch (error) {
//         console.error("ERROR: ", error);
//         throw error;
//     }
// })();

