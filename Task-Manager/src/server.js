import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
// const dbURI = process.env.DB_URL; // Replace with your MongoDB URI
const dbURI = "mongodb+srv://sanjayMERNDb:sanjayMERNDb@cluster1.re8rp8u.mongodb.net/TaskManager";

// Middleware for handling JSON requests
app.use(express.json());

// Defining routes for authentication (signup and signin routes)

// Signup route
app.post('/signup', async (req, res) => {
  try {
    // Creating a new user document with the data from the request
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: 'Signup failed' });
  }
});

// Signin route
app.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      // Authentication successful
      res.status(200).json({ message: 'Authentication successful' });
    } else {
      // Authentication failed
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Signin failed' });
  }
});

// User model schema
const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Connecting to the database
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
