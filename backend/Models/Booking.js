// Models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  adults: { type: Number, required: true },
  children: { type: Number, default: 0 },
  specialRequests: { type: String },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
