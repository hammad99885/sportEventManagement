import React, { Component } from 'react';
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div className="backgroundLinear1 text-light pt-5 pb-5 pl-2 pr-2">
            <div className="container">
                <div className="signInForm ml-auto mr-auto">
                    <h2>Register</h2>

                    <form action="">
                        <div className="form-group" >
                            <label className="db fw6 lh-copy f6" htmlFor="Fname">First Name</label>
                            <input type="text" className="text-light form-control white pa2  bg-transparent" name="Fname" id="Fname" required />
                            <label htmlFor="Fname" className="animated-label"></label>
                        </div>

                        <div className="form-group" >
                            <label className="db fw6 lh-copy f6" htmlFor="Lname">Last Name</label>
                            <input type="text" className="text-light form-control white pa2  bg-transparent" name="Lname" id="Lname" required />
                            <label htmlFor="Lname" className="animated-label"></label>
                        </div>

                        <div className="form-group" >
                            <label className="db fw6 lh-copy f6" htmlFor="email">E-mail</label>
                            <input type="email" className="text-light form-control white pa2  bg-transparent" name="email" id="email" required />
                            <label htmlFor="email" className="animated-label"></label>
                        </div>

                        <div className="form-group" >
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input type="password" className="form-control white pa2  bg-transparent text-light " name="password" id="password" required />
                            <label htmlFor="password" className="animated-label"></label>
                        </div>
                        <div className="">
                            <input

                                className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib text-light"
                                type="submit"
                                value="Sign in"
                            />
                        </div>
                        <div className="lh-copy mt3">
                            Already a member <Link to="/signin" className="blue hover-white d-inline-block"> Login here</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;