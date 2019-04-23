import React, { Component } from "react";
import "tachyons";
import FormGenrator from '../commom/FormGenrator';


const SignIn = ({changeHandler, logIn}) => {
  const formInputArr = [
    {
      name: "email",
      type: "email",
      label: "E-mail"
    },
    {
      name: "password",
      type: "password",
      label: "Password"
    }
  ];
  return (
    <div className="backgroundLinear1 text-light pt-5 pb-5 pl-2 pr-2">
      <div className="container">
        <div className="signInForm ml-auto mr-auto">
          <h2>Login</h2>
          <FormGenrator
            inputFields={formInputArr}
            changeHandler={changeHandler}
            submitAction={logIn}
            submitText={"Login"}
            bottomCaption={"Not yet a member"}
            bottomLinkText={"Create an Account"}
            bottomLinkPath={"/forms/register"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;

// class SignIn extends Component {
//   state = {
//     email: "",
//     password: ""
//   };

//   onEmailChange = e => {
//     this.setState({ email: e.target.value });
//   };
//   onPasswordChange = e => {
//     this.setState({ password: e.target.value });
//   };
//   render() {
//     const { email, password } = this.state;
//     return (
//       <div className="backgroundLinear1 text-light pt-5 pb-5 pl-2 pr-2">
//         <div className="container">
//           <div className="signInForm ml-auto mr-auto">
//             <h2>Sign In</h2>

//             <form action="">
//               <div className="form-group">
//                 <label className="db fw6 lh-copy f6" htmlFor="user">
//                   Email
//                 </label>
//                 <input
//                   onChange={this.onEmailChange}
//                   type="email"
//                   className="text-light form-control white pa2  bg-transparent"
//                   name="user"
//                   id="user"
//                   required
//                 />
//                 <label htmlFor="user" className="animated-label" />
//                 <div
//                   className={`mt-1 alert alert-danger d-none ${
//                     this.props.formatedEmail ? "d-none" : "d-block"
//                   }`}
//                 >
//                   Email must not be empitied and Contain an @ symbol and .com in
//                   end.
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label className="db fw6 lh-copy f6" htmlFor="password">
//                   Password
//                 </label>
//                 <input
//                   onChange={this.onPasswordChange}
//                   type="password"
//                   className="form-control white pa2  bg-transparent text-light "
//                   name="password"
//                   id="password"
//                   required
//                 />
//                 <label htmlFor="password" className="animated-label" />
//                 <div
//                   className={`mt-1 alert alert-danger d-none ${
//                     this.props.formatedPassword ? "d-none" : "d-block"
//                   }`}
//                 >
//                   Password must not be empitied
//                 </div>
//               </div>

//               <div className="">
//                 <input
//                   onClick={e => this.props.logIn(e, email, password)}
//                   className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib text-light"
//                   type="submit"
//                   value="Sign in"
//                 />
//                 {/* <a
//                   href={null}
//                   onClick={e => this.props.logIn(e, email, password)}
//                   className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib text-light"
//                 >Login</a> */}
//               </div>
//               <div className="lh-copy mt3">
//                 Not yet a member{" "}
//                 <Link
//                   to="/register"
//                   className=" blue hover-white d-inline-block"
//                 >
//                   Create an Account
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default SignIn;
