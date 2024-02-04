import con from '../../config/db.js';
export const loginUser = (req, res, next) => {
  const { email, password } = req.body;
  const sql = 'select * from loginuser where email=?';
  con.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.json({ loginStatus: false, Error: 'Query Error' });
    }
    if (result.length > 0) {
      return res.json({ result });
    }
  });
};
