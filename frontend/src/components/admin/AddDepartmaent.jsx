import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { v4 as uuid } from 'uuid';

function AddDepartmaent() {
  const navigate = useNavigate();
  const [depData, setDepData] = useState([]);
  const [department, setDepartment] = useState({
    dep_name: '',
    dep_st_name: '',
  });

  const handleInputChange = (e) => {
    setDepartment((curr) => {
      return { ...curr, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const dt = new Object();
    dt.dep_name = department.dep_name;
    dt.dep_st_name = department.dep_st_name;
    dt.dep_id = uuid();
    axios
      .post('/api/admin/add-department', dt)
      .then((result) => {
        console.log(result);
        if (result.data.msg === 'All field are required ') {
          return alert(result.data.msg);
        }
        if (result.data.msg === 'Department added successfully') {
          alert(result.data.msg);
          navigate('/admin-login/dashboard');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get('/api/admin/get-department')
      .then((result) => {
        setDepData(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="w-full h-svh bg-indigo-700 ">
        <div className="p-3">
          <form
            className="d-flex flex-col w-1/2 m-auto border p-3 text-white gap-1"
            onSubmit={handleSubmit}
          >
            <label htmlFor="dep_name" className="form-label">
              Department Name
            </label>
            <input
              type="text"
              id="dep_name"
              name="dep_name"
              className="form-control"
              onChange={handleInputChange}
            />
            <label htmlFor="dep_st_name" className="form-label">
              Short Name Of Department
            </label>
            <input
              type="text"
              id="dep_st_name"
              name="dep_st_name"
              className="form-control"
              onChange={handleInputChange}
            />
            <button className="btn btn-success w-1/4 m-auto mt-3">Add</button>
          </form>
        </div>
        <hr className="border-[2px] text-white " />
        <h4 className="text-white text-center">All Department/Branches</h4>
        <hr className="border-[2px] text-white " />
        <div className="overflow-scroll">
          <table className="table h-2/5">
            <thead>
              <tr>
                <th>Department Name</th>
                <th>Department Short Name</th>
              </tr>
            </thead>
            <tbody>
              {depData.map((d) => {
                return (
                  <tr key={d.dep_id}>
                    <td>{d.dep_name}</td>
                    <td>{d.dep_st_name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AddDepartmaent;
