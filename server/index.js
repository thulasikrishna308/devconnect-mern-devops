import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import blogRoutes from './routes/blog.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes); // ✅ Mount user CRUD routes here
app.use('/api/blogs', blogRoutes);

// Connect MongoDB and Start Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => {
      console.log('🚀 Server running on port 5000');
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
