import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB()














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

