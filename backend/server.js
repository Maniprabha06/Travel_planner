// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./Models/User'); // Ensure the correct path to your User model
const Booking = require('./Models/Booking'); // Ensure the correct path to your Booking model
const jwt = require('jsonwebtoken');

dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // Use express.json() instead of body-parser.json()
app.use(cors()); // Allow all CORS requests (for development purposes)

// MongoDB connection setup
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// Signup route
app.post('/api/signup', async (req, res) => {
  const { name, email, dateOfBirth, password } = req.body;

  try {
    // Check if user already exists
    let existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ name, email, dateOfBirth, password });
    await newUser.save();

    console.log('User saved successfully:', newUser); // Log the saved user object
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ message: 'Signup failed. Please try again.' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Verify password (plain text comparison)
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with token
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Login failed. Please try again.' });
  }
});

// Booking route
app.post('/api/bookings', async (req, res) => {
  const { destination, startDate, endDate, adults, children, specialRequests } = req.body;

  try {
    const newBooking = new Booking({
      destination,
      startDate,
      endDate,
      adults,
      children,
      specialRequests
    });

    await newBooking.save();
    console.log('Booking saved successfully:', newBooking);
    res.status(201).json({ message: 'Booking successful' });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Booking failed. Please try again.' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
