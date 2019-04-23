import React from "react";
import FormGenrator from "../commom/FormGenrator";

const Register = ({ changeHandler, register }) => {
  const formInputArr = [
    {
      name: "Fname",
      type: "text",
      label: "First Name"
    },
    {
      name: "Lname",
      type: "text",
      label: "Last Name"
    },
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
          <h2>Register</h2>
          <FormGenrator
            inputFields={formInputArr}
            changeHandler={changeHandler}
            submitAction={register}
            submitText={"register"}
            bottomCaption={"Already a member"}
            bottomLinkText={"Login Here"}
            bottomLinkPath={"/forms/login"}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

// class Register extends React.PureComponent {
//   state = {
//     Fname: "",
//     Lname: "",
//     fullName: "",
//     email: "",
//     password: ""
//   };

//   // changeHandler = e => {
//   //   this.setState({ [e.target.id]: e.target.value });
//   // };
//   render() {
//     // this.submitHandler();

//     const { Fname, Lname, email, password } = this.state;

//     return (
//       <div className="backgroundLinear1 text-light pt-5 pb-5 pl-2 pr-2">
//         <div className="container">
//           <div className="signInForm ml-auto mr-auto">
//             <h2>Register</h2>

//             <form method="post">
//               <InputField
//                 name={"Fname"}
//                 type={"text"}
//                 label={"First Name"}
//                 changeHandler={this.changeHandler}
//               />
//               <InputField
//                 name={"Lname"}
//                 type={"text"}
//                 label={"Last Name"}
//                 changeHandler={this.changeHandler}
//               />

//               <InputField
//                 name={"email"}
//                 type={"email"}
//                 label={"E-mail"}
//                 changeHandler={this.changeHandler}
//               />

//               <InputField
//                 name={"password"}
//                 type={"password"}
//                 label={"Password"}
//                 changeHandler={this.changeHandler}
//               />

//               <div className="">
//                 <button
//                   className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib text-light"
//                   onClick={() =>
//                     this.props.register(Fname, Lname, email, password)
//                   }
//                   value="Register"
//                 >
//                   Register
//                 </button>
//               </div>
//               <div className="lh-copy mt3">
//                 Already a member{" "}
//                 <Link
//                   to="/forms/signin"
//                   className="blue hover-white d-inline-block"
//                 >
//                   {" "}
//                   Login here
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Register;
