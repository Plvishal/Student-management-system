import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import AdminLogin from './components/login/AdminLogin.jsx';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/student-login" element={<Login />}></Route>
          <Route path="/admin-login" element={<AdminLogin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
