import React, { Component } from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
import "tachyons"


const SignIn = () => {
    return (

        <div className="backgroundLinear1 text-light pt-5 pb-5 pl-2 pr-2">
            <div className="container">
                <div className="signInForm ml-auto mr-auto">
                    <h2>Sign In</h2>

                    <form action="">
                    <div className="form-group" >
                                <label className="db fw6 lh-copy f6" htmlFor="user">Email</label>
                                    <input type="email" className="text-light form-control white pa2  bg-transparent" name="user" id="user" required  />
                                    <label htmlFor="user" className="animated-label"></label>
                                </div>

                                <div className="form-group" >
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input type="password" className="form-control white pa2  bg-transparent text-light " name="password" id="password" required  />
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

                         Not yet a member   <Link to="/register" className=" blue hover-white d-inline-block">Create an Account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default SignIn;