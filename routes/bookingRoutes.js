const express = require("express");
const Booking = require("../models/Booking");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, async (req, res) => {
  try {
    const booking = new Booking({
      userId: req.user.id,
      serviceName: req.body.serviceName,
      price: req.body.price,
      date: req.body.date,
      mobile: req.body.mobile
    });

    await booking.save();

    res.json({ message: "Booking Confirmed" });
  } catch (err) {
    res.status(500).json({ message: "Booking failed" });
  }
});

module.exports = router;
