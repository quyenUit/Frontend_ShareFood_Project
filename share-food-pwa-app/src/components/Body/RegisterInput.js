import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import BrandLogin from "../../images/brand-login1.jpg";
import BrandLogin1 from "../../images/brand-login2.jpg";
import BrandLogin2 from "../../images/brand-login3.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterInput = () => {
  const registerSuccess = () => toast("Đăng ký thành công!");
  // const [fname, setfname] = useState("");
  // const [lname, setlname] = useState("");
  // const [date, setdate] = useState(null);
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Password1, setPassword1] = useState("");
  const navigate = useNavigate();
  const HandleSubmit = async (event) => {
    event.preventDefault();

    if (Password === Password1) {
      await axios
        .post("http://localhost:3001/register", {
          username: Username,
          email: Email,
          password: Password,
        })
        .then((response) => {
          //response = findUser = {username, password}  {}
          if (response) {
            navigate("/login");
          } else {
            navigate("/register");
          }
        })
        .catch((e) => {});
    }
  };

  return (
    <section className="login-phase">
      <div className="container-fluid1 h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5 img-login">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={BrandLogin}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={BrandLogin1}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={BrandLogin2}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form actionName="/login" onSubmit={HandleSubmit}>
              <div className="form-outline mb-3">
                <label className="form-label" for="form3Example4">
                  Tên đăng nhập
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter username"
                  name="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                ></input>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter email address"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" for="form3Example4">
                  Nhập mật khẩu
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" for="form3Example4">
                  Nhập lại mật khẩu
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  name="password"
                  onChange={(e) => {
                    setPassword1(e.target.value);
                  }}
                ></input>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  onClick={registerSuccess}
                >
                  Đăng ký
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterInput;
