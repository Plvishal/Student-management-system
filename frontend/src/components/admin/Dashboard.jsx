import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <div className="w-full h-screen bg-blue-900 ">
        <ul className=" d-flex   justify-content-between  flex-wrap p-4 gap-2">
          <li className="btn btn-success p-5">
            <Link
              className="text-decoration-none text-white w-1/2 h-1/2"
              to="/admin-login/add-courses"
            >
              Add Courses
            </Link>
          </li>
          <li className="btn btn-success p-5">
            <Link
              className="text-decoration-none text-white w-1/2 h-1/2"
              to="/admin-login/add-department"
            >
              Add Department/Branches
            </Link>
          </li>
          <li className="btn btn-success p-5">
            <Link
              className="text-decoration-none text-white w-1/2 h-1/2 "
              to="/admin-login/student-registration"
            >
              Student Registration
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Dashboard;
