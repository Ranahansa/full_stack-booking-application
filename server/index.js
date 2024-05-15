import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./lib/db.js";

const app = express();
const port = process.env.PORT || 8800;

app.use(cors());
app.use(express.json());

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
