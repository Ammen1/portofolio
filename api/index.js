import { error } from "console";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(console.log("mongoDb is connected"))
  .catch((error) => {
    console.error(error);
  });
const app = express();

app.listen(3000, () => {
  console.log("server runing on portd 3000..!");
});

app.use("/api/user/", userRoutes);
