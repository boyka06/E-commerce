const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

mongoose
  .connect("mongodb+srv://sachinkunwar2059:AMpqEH7R7TG5YWwT@cluster06.9c4zsqt.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error)); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`)); 
