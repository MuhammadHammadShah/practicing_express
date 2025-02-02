import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import courseRoutes from "./routes/course.routes"; // Ensure sahi path ho

dotenv.config();

const app: Application = express(); // Yahan explicit Application type do

const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/courses-db";

app.use(express.json()); // JSON middleware zaroori hai

// API routes register karna
app.use("/api/courses", courseRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
