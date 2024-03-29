import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRouter from './src/routes/user.routes.js';
import { errorHandlerMiddleware } from './middleware/errorHandlerMiddleware.js';
import adminRouter from './src/routes/admin.routes.js';
const configPath = path.resolve('./.env');

dotenv.config({ path: configPath });
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);

app.use(errorHandlerMiddleware);
export default app;
