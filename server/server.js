const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const registerRouter = require("./routers/register");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Database connection
try {
  mongoose.connect(process.env.DB_URI);
  console.log("Database connected");
} catch (err) {
  console.log(err);
}

// Routes
app.use("/api/register", registerRouter);

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
