import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <div className="">
        <ul className=" d-flex nav nav-pills  justify-content-between flex-wrap p-1 gap-3">
          <li className="btn btn-success w-50 p-4">
            <Link
              className="text-decoration-none"
              to="/admin-login/add-courses"
            >
              Add Courses
            </Link>
          </li>
          <li className="btn btn-success w-50 p-4">
            <Link className="text-decoration-none">Add Department</Link>
          </li>
          <li className="btn btn-success w-50 p-4">
            <Link className="text-decoration-none">Add Studdent</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Dashboard;
