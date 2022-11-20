import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterInput = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [date, setdate] = useState(null);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Password1, setPassword1] = useState("");
  const navigate = useNavigate();
  const HandleSubmit = async (event) => {
    event.preventDefault();
    ////http://localhost:3001/signup
    //https://agriculture-app12-api.herokuapp.com/signup
    if (Password === Password1) {
      await axios
        .post("https://backend-sharefood-project.herokuapp.com/register", {
          fname: fname,
          lname: lname,
          dob: date,
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
          <div className="col-md-9 col-lg-6 col-xl-5 img-login"></div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form actionName="/login" onSubmit={HandleSubmit}>
              <div className="form-outline mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter first name"
                  name="fname"
                  onChange={(e) => {
                    setfname(e.target.value);
                  }}
                ></input>
                <label className="form-label" for="form3Example4">
                  First name
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter last name"
                  name="lname"
                  onChange={(e) => {
                    setlname(e.target.value);
                  }}
                ></input>
                <label className="form-label" for="form3Example4">
                  Last name
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  placeholder="Enter date of birth"
                  name="password"
                  onChange={(e) => {
                    setdate(e.target.value);
                  }}
                ></input>
                <label className="form-label" for="form3Example4">
                  Date of Birth
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  name="username"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
                <label className="form-label" for="form3Example3">
                  User name
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
                <label className="form-label" for="form3Example4">
                  Password
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  name="password"
                  onChange={(e) => {
                    setPassword1(e.target.value);
                  }}
                ></input>
                <label className="form-label" for="form3Example4">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <button type="submit" className="btn btn-primary btn-lg">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterInput;
