import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="login_container">
        <div className="border col-4 ">
          <h3 className="text-center">Login As</h3>
          <div className="d-flex justify-content-between p-3">
            <Link
              className="text-decoration-none btn btn-success"
              to="/student-login"
            >
              Student
            </Link>
            <Link
              className="text-decoration-none btn btn-info"
              to="/admin-login"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
