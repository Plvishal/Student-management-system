import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { v4 as uuid } from 'uuid';

function AddCourses() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    courses: '',
    year: '',
  });
  const [course, setCourse] = useState([]);

  const handleInputChanges = (e) => {
    setFormData((curr) => {
      return { ...curr, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const dt = new Object();
    dt.courses = formData.courses;
    dt.year = formData.year;
    dt.id = uuid();

    axios
      .post('/api/admin/add-courses', dt)
      .then((result) => {
        alert(result.data.msg);
        navigate('/admin-login/dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get('/api/admin/all-courses')
      .then((result) => {
        setCourse(result.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="w-full h-full">
        <div className="bg-red-900 p-2 h-screen">
          <div>
            <form className="d-flex " onSubmit={handleSubmit}>
              <input
                type="text"
                id="courses"
                name="courses"
                placeholder="Enter here courses"
                className="form-control"
                onChange={handleInputChanges}
              />
              <input
                type="number"
                id="year"
                name="year"
                placeholder="Enter here Year"
                className="form-control"
                onChange={handleInputChanges}
              />
              <button className="btn btn-success">Add Courses</button>
            </form>
          </div>
          <hr className="text-white border-[5px]" />
          <div>
            <h4 className="text-white text-center"> All Courses</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Courses</th>
                  <th>Years</th>
                </tr>
              </thead>
              <tbody>
                {course.map((c) => {
                  return (
                    <tr key={c.cor_id}>
                      <td>{c.cor_name}</td>
                      <td>{c.cor_year}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCourses;
