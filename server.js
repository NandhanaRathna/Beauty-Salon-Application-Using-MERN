const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const bookingRoutes =  require("./routes/bookingRoutes")
const contactRoutes = require("./routes/contactRoutes")

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/beauty")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
  
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
