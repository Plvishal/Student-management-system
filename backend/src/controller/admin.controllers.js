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
