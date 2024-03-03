import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.error(err);
  });

const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({
  origin: [""],
  methods: ["POST", "GET"],
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

// Serve the React app
app.use(express.static(path.join(__dirname, 'client/dist')));

// API routes
app.use('/api/user', require('./routes/user.route.js'));
app.use('/api/auth', require('./routes/auth.route.js'));
app.use('/api/post', require('./routes/post.route.js'));
app.use('/api/comment', require('./routes/comment.route.js'));

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
