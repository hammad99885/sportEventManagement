import React, { Component } from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
import "tachyons"


const SignIn = () => {
    return (
        // <main className="backgroundLinear1 pa4 white-80">
        //     <form className="measure center">
        //         <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        //             <legend className="f4 fw6 ph0 mh0">Sign In</legend>
        //             <div className="mt3">
        //                 <label className="db fw6 lh-copy f6" for="email-address">Email</label>
        //                 <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
        //             </div>
        //             <div className="mv3">
        //                 <label className="db fw6 lh-copy f6" for="password">Password</label>
        //                 <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
        //             </div>
        //             <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
        //         </fieldset>
        //         <div className="">
        //             <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
        //         </div>
        //         <div className="lh-copy mt3">
        //             <Link to="/signup" className="f6 link dim black db">Sign up</Link>
        //         </div>
        //     </form>
        // </main>


        // <div className="form-group" >
        //                         <label className="db fw6 lh-copy f6" htmlFor="user">Email</label>
        //                             <input type="email" className="form-control white pa2  bg-transparent" name="user" id="user" required  />
        //                             <label htmlFor="user" className="animated-label"></label>
        //                         </div>

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

        // <div className="backgroundLinear1 pt-5 pb-5">
        // <form action="">
        //     <input type="text" required name="" id=""/>
        //     <input type="submit" name="" id=""/>
        // </form>
        //     <article className=" br3 ba b--white-10  w-100 w-50-m w-25-l mw6 shadow-5 center">
        //         <main className="pa4 white-80">
        //             <div className="measure">
        //                 <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        //                     <legend className="f1 fw6 ph0 mh0 text-light">Sign In</legend>
        //                     <div className="mt3 position-relative">
        //                         <div className="form-group" >
        //                         <label className="db fw6 lh-copy f6" htmlFor="user">Email</label>
        //                             <input type="email" className="form-control white pa2  bg-transparent" name="user" id="user" required  />
        //                             <label htmlFor="user" className="animated-label"></label>
        //                         </div>
        //                     </div>
        //                     <div className="mv3">
        //                         <div className="form-group" >
        //                         <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        //                             <input type="password" className="form-control white pa2  bg-transparent" name="pass" id="pass" ng-model="passWord" />
        //                             <label htmlFor="pass" className="animated-label"></label>
        //                         </div>
        //                     </div>
        //                 </fieldset>
        //                 <div className="">
        //                     <input

        //                         className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib text-light"
        //                         type="submit"
        //                         value="Sign in"
        //                     />
        //                 </div>
        //                 <div className="lh-copy mt3">
        //                     <Link to="/register" className="f6 link dim white db pointer">Register</Link>
        //                 </div>
        //             </div>
        //         </main>
        //     </article>
        // </div>
    );
}

export default SignIn;