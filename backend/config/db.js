import mysql from 'mysql';
const con = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

export const ConnectDB = con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connection successful with databases');
  }
});
