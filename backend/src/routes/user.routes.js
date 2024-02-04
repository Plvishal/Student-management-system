import express from 'express';
import { loginUser } from '../controller/user.controller.js';

const userRouter = express.Router();

userRouter.route('/empLogin').post(loginUser);

export default userRouter;
