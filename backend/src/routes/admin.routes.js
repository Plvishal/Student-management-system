import express from 'express';
import { loginAdmin } from '../controller/admin.controllers.js';

const adminRouter = express.Router();
adminRouter.route('/admin-login').post(loginAdmin);

export default adminRouter;
