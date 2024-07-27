const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Update this to your frontend URL
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
