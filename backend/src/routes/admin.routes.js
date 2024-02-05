import express from 'express';
import {
  addCourses,
  addDepartment,
  getAllCourses,
  loginAdmin,
} from '../controller/admin.controllers.js';

const adminRouter = express.Router();
adminRouter.route('/admin-login').post(loginAdmin);
adminRouter.route('/add-courses').post(addCourses);
adminRouter.route('/all-courses').get(getAllCourses);
adminRouter.route('/add-department').post(addDepartment);

export default adminRouter;
