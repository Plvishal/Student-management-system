import con from '../../config/db.js';
// import express from 'express';
import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
// import multer from 'multer';
// import path from 'path';
export const loginAdmin = (req, res, next) => {
  const { email, password } = req.body;
  const sql = 'select * from loginuser where email=? and password=? ';
  con.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.json({ loginStatus: false, msg: 'Query Error' });
    }
    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: 'admin', email: email, id: result[0].id },
        'dfguygregoidfnbvuyt6serpoksdvfdhdf',
        { expiresIn: '1d' }
      );
      res.cookie('token', token);
      return res.json({ loginStatus: true });
    } else {
      return res.json({ loginStatus: false, msg: 'Invailid Credentials' });
    }
  });
};
export const addCourses = (req, res, next) => {
  // const { courses, year, id } = req.body;
  const values = [req.body.id, req.body.courses, req.body.year];

  const sql = 'INSERT INTO courses  VALUES (?)';
  con.query(sql, [values], (err, result) => {
    if (err) {
      return res.json({ Status: false, msg: 'Query Error' });
    }
    if (result.affectedRows > 0) {
      return res.json({ msg: 'Courses added successfully' });
    } else {
      return res.json({ msg: 'Something went wrong ' });
    }
  });
};
export const getAllCourses = (req, res, next) => {
  const sql = 'select * from courses';
  con.query(sql, (err, result) => {
    if (err) {
      return res.json({ Status: false, mag: 'Query Error' });
    }
    if (result.length > 0) {
      return res.json({ result });
    }
  });
};
export const addDepartment = (req, res, next) => {
  const values = [req.body.dep_id, req.body.dep_name, req.body.dep_st_name];
  const { dep_name, dep_st_name } = req.body;
  if (!dep_name || !dep_st_name) {
    return res.json({ msg: 'All field are required ' });
  }

  const sql = 'INSERT INTO department  VALUES (?)';
  con.query(sql, [values], (err, result) => {
    if (err) {
      return res.json({ Status: false, msg: 'Query Error' });
    }
    if (result.affectedRows > 0) {
      return res.json({ msg: 'Department added successfully' });
    } else {
      return res.json({ msg: 'Something went wrong ' });
    }
  });
};
export const getDepartment = (req, res, next) => {
  const sql = 'select * from department';
  con.query(sql, (err, result) => {
    if (err) {
      return res.json({ Status: false, msg: 'Query Error' });
    }
    if (result.length > 0) {
      return res.json({ result });
    }
  });
};
export const studentregistration = (req, res, next) => {};
