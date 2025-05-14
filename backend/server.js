// server.js (or your main app file)
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js';
import cookieParser  from 'cookie-parser';


connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

// Routes documentation:
// - POST /api/users - Register a User
// - POST /api/users/auth - Authenticate a user and get token 
// - GET /api/users/profile - Get user profile 
// - PUT /api/users/profile - Update profile