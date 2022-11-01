import React from 'react'
import "../../styles/Login.css";
import BrandLogin from "../../images/brand-login1.jpg";
import BrandLogin1 from "../../images/brand-login2.jpg";
import BrandLogin2 from "../../images/brand-login3.jpg";
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
const LoginInput = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);
    const navigate = useNavigate();
    const HandleSubmit = async(event) =>{
        event.preventDefault();
        ////http://localhost:3001/signup
        //https://agriculture-app12-api.herokuapp.com/signup
        await axios.post('http://localhost:3001/signup', {
            email: Email,
            password: Password
        }).then((response => {  //response = findUser = {username, password}  {}
            if(response){
                navigate('/', {state: {lname: response.data.lname}});
            }
            else{
                navigate('/login');
            }
        })).catch((e)=>{
            setLoginStatus("Wrong Username / Password. Try again.");
        })
    }
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
                <input type="text" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" name="username" 
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}></input>
                <label className="form-label" for="form3Example3">Email address</label>
                </div>
    
                <div className="form-outline mb-3">
                <input type="password" className="form-control form-control-lg"
                    placeholder="Enter password" name="password"        
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}></input>
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