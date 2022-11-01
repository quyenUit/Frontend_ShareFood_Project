import React from 'react'

const RegisterInput = () => {
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
                <input type="text" className="form-control form-control-lg"
                    placeholder="Enter first name" name="fname" 
                    onChange={(e) => {setPassword(e.target.value)}}>
                </input>
                <label className="form-label" for="form3Example4">First name</label>
            </div>

            <div className="form-outline mb-3">
                <input type="text" className="form-control form-control-lg"
                    placeholder="Enter last name" name="lname" 
                    onChange={(e) => {setPassword(e.target.value)}}>
                </input>
                <label className="form-label" for="form3Example4">Last name</label>
            </div>

            <div className="form-outline mb-3">
                <input type="date" className="form-control form-control-lg"
                    placeholder="Enter date of birth" name="password" 
                    onChange={(e) => {setPassword(e.target.value)}}>
                </input>
                <label className="form-label" for="form3Example4">Date of Birth</label>
            </div>


            <div className="form-outline mb-4">
                <input type="text" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" name="username" 
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}></input>
                <label className="form-label" for="form3Example3">User name</label>
            </div>

            <div className="form-outline mb-3">
                <input type="password" className="form-control form-control-lg"
                    placeholder="Enter password" name="password" 
                    onChange={(e) => {setPassword(e.target.value)}}>
                </input>
                <label className="form-label" for="form3Example4">Password</label>
            </div>

            <div className="form-outline mb-3">
                <input type="password" className="form-control form-control-lg"
                    placeholder="Enter password" name="password" 
                    onChange={(e) => {setPassword(e.target.value)}}>
                </input>
                <label className="form-label" for="form3Example4">Password</label>
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
            </div>
        </form>
        </div>
    </div>
    </div>
</section>
  )
}

export default RegisterInput;