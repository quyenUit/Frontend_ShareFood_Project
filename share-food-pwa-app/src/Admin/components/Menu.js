import React from "react";
import { Outlet } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/users/userSlice";
import "./Menu.css";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LogoutAdmin = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid mt-4">
            <a className="navbar-brand" href="/admin">
              Admin Share Food
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent "
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/admin">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin/users">
                    Users
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin/posts">
                    Posts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin/orders">
                    Orders
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <button className="btn btn-outline-success" onClick={LogoutAdmin}>
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Menu;
