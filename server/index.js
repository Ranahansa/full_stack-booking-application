import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./lib/db.js";
import users from "./routes/users.js";
import hotels from "./routes/hotels.js";
import rooms from "./routes/rooms.js";
import auth from "./routes/auth.js";
import cookieParser from "cookie-parser";


const app = express();
const port = process.env.PORT || 8800;



//middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/api/users", users);
app.use("/api/hotels", hotels);
app.use("/api/rooms", rooms);
app.use("/api/auth", auth);

app.use ((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
