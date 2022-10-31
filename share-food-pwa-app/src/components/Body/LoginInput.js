import React from 'react'
import "../../styles/Login.css";
import BrandLogin from "../../images/brand-login1.jpg";
import BrandLogin1 from "../../images/brand-login2.jpg";
import BrandLogin2 from "../../images/brand-login3.jpg";
import Carousel from 'react-bootstrap/Carousel';

const LoginInput = () => {
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
            <form actionName="/login" method="post">
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                </button>
    
                <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                </button>
    
                <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-linkedin-in"></i>
                </button>
                </div>
    
                <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
    
                <div className="form-outline mb-4">
                <input type="text" class="form-control form-control-lg"
                    placeholder="Enter a valid email address" name="acc_name"></input>
                <label className="form-label" for="form3Example3">Email address</label>
                </div>
    
                <div className="form-outline mb-3">
                <input type="password" class="form-control form-control-lg"
                    placeholder="Enter password" name="password"></input>
                <label className="form-label" for="form3Example4">Password</label>
                </div>
    
                <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" for="form2Example3">
                    Remember me
                    </label>
                </div>
                <a href="#!" className="text-body">Forgot password?</a>
                </div>
    
                <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                    className="link-danger">Register</a></p>
                </div>
            </form>
            </div>
        </div>
        </div>
  </section>
  )
}

export default LoginInput;