import React from "react";
import "../../styles/Login.css";
import BrandLogin from "../../images/brand-login1.jpg";
import BrandLogin1 from "../../images/brand-login2.jpg";
import BrandLogin2 from "../../images/brand-login3.jpg";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userLogin } from "../../features/users/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchNeedOrders, fetchOrders } from "../../features/orders/orderAction";

const LoginInput = () => {
  const loginSuccess = () => toast("Đăng nhập thành công!");
  const [Username, setUsername] = useState("");
  // const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
      dispatch(fetchOrders(userInfo.email));
      dispatch(fetchNeedOrders(userInfo._id));
    } else {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  const HandleSubmit = async (event) => {
    event.preventDefault();
    dispatch(userLogin({ username: Username, password: Password }));
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
              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
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

              <div className="form-outline mb-3">
                <label className="form-label" for="form3Example4">
                  Mật khẩu
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

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" for="form2Example3">
                    Nhớ mật khẩu
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Quên mật khẩu ?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  onClick={loginSuccess}
                >
                  Đăng nhập
                </button>
                <ToastContainer />
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Chưa có tài khoản?{" "}
                  <a href="/register" className="link-danger">
                    Đăng ký
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginInput;
