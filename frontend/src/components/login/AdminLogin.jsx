import { useState } from 'react';
import '../style/login.css';
import axios from 'axios';
function AdminLogin() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  axios.withCredentials = true;
  const handleInputChnage = (e) => {
    setLogin((currValue) => {
      return { ...currValue, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    axios
      .post('/api/user/stdLogin', login)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="login_container">
        <form className="border p-2  col-3  " onSubmit={handleSubmit}>
          <h4 className="text-center mt-2 mb-2">Login As Admin</h4>
          <label htmlFor="email" className="form-label">
            Email ID
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={login.email}
            onChange={handleInputChnage}
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={login.password}
            className="form-control"
            onChange={handleInputChnage}
          />
          <button className="btn btn-success mt-2 " type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default AdminLogin;
