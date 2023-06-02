import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="container-fluid px-0 bg-light shadow">
      <div className="container-fluid col-11 d-flex align-items-center py-2">
        <h3 className="mb-0">
          <Link to="/" className="text-decoration-none text-dark">
            Logo
          </Link>
        </h3>
        <ul className="ms-auto list-unstyled mb-0 d-flex align-items-center">
          <li>
            <Link className="text-decoration-none text-dark me-2" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none btn btn-success btn-sm text-light"
              to="/add"
            >
              Add Todo
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
