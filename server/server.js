import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import aiRouter from './routers/aiRouters.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routers/userRoutes.js';

const app = express();
await connectCloudinary();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get('/', (req, res) => res.send('Welcome to express server'));
app.use(requireAuth());
app.use('/api/ai', aiRouter);
app.use('/api/user', userRouter);

const port = process.env.PORT || 3303;

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
