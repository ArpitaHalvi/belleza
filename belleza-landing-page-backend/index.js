import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import contactRouter from "./routes/contact-router.js";
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:3000" || process.env.FRONTEND_URL,
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
const URL = process.env.MONGODB_URI || "mongodb://localhost:27017/belleza";

mongoose
  .connect(URL)
  .then(() => {
    console.log("Successfully connected to MongoDB!!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((e) => console.error(e));

app.use("/api/contact", contactRouter);
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";
  const extraDetails = err.extraDetails || null;

  res.status(statusCode).json({ message, extraDetails });
});
