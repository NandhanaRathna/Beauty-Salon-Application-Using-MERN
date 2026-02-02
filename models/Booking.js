const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  serviceName: String,
  price: Number,
  date: String,
  mobile: String,
  status: {
    type: String,
    default: "CONFIRMED"
  }
});

module.exports = mongoose.model("Booking", bookingSchema);
