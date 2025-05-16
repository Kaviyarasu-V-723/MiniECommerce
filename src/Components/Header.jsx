import React from "react";
import { Link } from "react-router-dom";

const MyList = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm mb-4">
      <div className="container">
        {/* <Link className="navbar-brand fw-bold text-white" to="/home">
          🛍️ ShopEase
        </Link> */}
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link text-white" to="/about">
                About
              </Link> */}
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link text-white" to="/contact">
                Contact
              </Link> */}
            </li>

            {/* Dropdown for Information */}
            {/* <li className="nav-item dropdown custom-dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Information
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/terms">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/privacy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </li> */}
          </ul>

          {/* Right-side buttons */}
          <div className="d-flex gap-2">
            <Link to="/login" className="btn btn-primary text-white">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary text-white">
              Register
            </Link>
            <Link to="/cart" className="btn btn-primary text-white">
              🛒 Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyList;
