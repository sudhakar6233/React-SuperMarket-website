import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Layout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm" style={{ backgroundColor: "#4CAF50" }}>
        <div className="container">
          <Link className="navbar-brand fw-bold text-white d-flex align-items-center" to="/">
            <i className="bi bi-cart-fill me-2 fs-3 text-warning"></i>
            <span className="fs-4">VEG MART</span>
          </Link>
          <button
            className="navbar-toggler border-0 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold px-3" to="/">
                  <i className="bi bi-house-door-fill me-2 fs-5"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold px-3" to="/login">
                  <i className="bi bi-person-fill me-2 fs-5"></i> Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold px-3" to="/deals">
                  <i className="bi bi-tags-fill me-2 fs-5"></i> Deals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold px-3" to="/register">
                  <i className="bi bi-pencil-square me-2 fs-5"></i> Register
                </Link>
              </li>
            </ul>

            {/* Search Bar */}
            <form className="d-flex ms-4">
              <input className="form-control rounded-pill px-3" type="search" placeholder="Search for fresh deals..." aria-label="Search" />
              <button className="btn btn-warning rounded-pill ms-2 px-3 text-dark" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
