import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
const configPath = path.resolve('.env');
dotenv.config({ path: configPath });
const app = express();
app.use(express.json());
app.use(cookieParser());

export default app;
