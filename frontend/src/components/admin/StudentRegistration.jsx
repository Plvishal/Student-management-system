import axios from 'axios';
import { useEffect, useState } from 'react';

function StudentRegistration() {
  const [selectCourses, setSelectCourses] = useState([]);
  const [dep, setDep] = useState([]);
  const [stdRegister, setStdRegister] = useState({
    name: '',
    email: '',
    contact: '',
    dob: '',
    courses: '',
    department: '',
    url: '',
    address: '',
  });
  useEffect(() => {
    axios
      .get('/api/admin/all-courses')
      .then((result) => {
        // console.log(result);
        setSelectCourses(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get('/api/admin/all-department')
      .then((result) => {
        setDep(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleInputchanges = (e) => {
    setStdRegister((currValue) => {
      return { ...currValue, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(stdRegister);
  };
  return (
    <>
      <div className="w-full  bg-blue-900 p-4  text-white">
        <div className="w-1/2 m-auto border p-2 shadow-lg  ">
          <h5 className="text-white text-center">Student Registration Form</h5>
          <hr className="border-[3px] text-white" />
          <form onSubmit={handleSubmit} className="w-full">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              onChange={handleInputchanges}
            />
            <label htmlFor="email" className="form-label">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              onChange={handleInputchanges}
            />
            <label htmlFor="contact" className="form-label">
              Mobile No
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              className="form-control"
              onChange={handleInputchanges}
            />
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="form-control"
              onChange={handleInputchanges}
            />
            <label htmlFor="courses" className="form-label">
              Course
            </label>
            <select
              name="courses"
              id="courses"
              className="form-select"
              onChange={handleInputchanges}
            >
              {selectCourses.map((c) => {
                return (
                  <option key={c.cor_id} value={c.cor_name}>
                    {c.cor_name}
                  </option>
                );
              })}
            </select>
            <label htmlFor="department" className="form-label">
              Department/Branches
            </label>
            <select
              name="department"
              id="department"
              className="form-select"
              onChange={handleInputchanges}
            >
              {dep.map((d) => {
                return (
                  <option value={d.dep_name} key={d.dep_id}>
                    {d.dep_name}
                  </option>
                );
              })}
            </select>

            <label htmlFor="url">Choose Image</label>
            <input
              type="file"
              name="url"
              id="url"
              className="form-control"
              onChange={(e) =>
                setStdRegister({ ...stdRegister, url: e.target.files[0].name })
              }
            />
            <label htmlFor="address">Address</label>
            <textarea
              name="address"
              id="address"
              cols="30"
              rows="4"
              className="form-control"
              onChange={handleInputchanges}
            ></textarea>
            <div className="d-flex justify-content-center align-items-center mt-2">
              <button className="btn btn-success w-1/4 p-3">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default StudentRegistration;
