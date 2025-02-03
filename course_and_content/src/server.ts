import express from "express";
import dotenv from "dotenv";
import courseRoutes from "./routes/course.routes";
import contentRoutes from "./routes/content.routes";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(express.json()); // JSON parsing

app.use("/api", courseRoutes);
app.use("/api", contentRoutes);

// DB connection

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });

// server listen

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
