import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import AdminLogin from './components/login/AdminLogin.jsx';
import Home from './components/Home';
import AdminDashboard from './components/admin/AdminDashboard.jsx';
import Dashboard from './components/admin/Dashboard.jsx';
import AddCourses from './components/admin/AddCourses.jsx';
import AddDepartmaent from './components/admin/AddDepartmaent.jsx';
import StudentRegistration from './components/admin/StudentRegistration.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/student-login" element={<Login />}></Route>
          <Route path="/admin-login" element={<AdminLogin />}></Route>
          <Route path="/admin-login" element={<AdminDashboard />}>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="add-courses" element={<AddCourses />}></Route>
            <Route path="add-department" element={<AddDepartmaent />}></Route>
            <Route
              path="student-registration"
              element={<StudentRegistration />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
