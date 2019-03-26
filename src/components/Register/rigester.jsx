import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {
    fName: "",
    lName: "",
    fullName: "",
    email: "",
    password: "",
    fNEmpitied: false,
    lNEmpitied: false,
    pasEmpitied: false,
    emailNotFormated: false,
    canSubmit: false
  };
  onFNameChange = e => {
    this.setState({ fName: e.target.value });
    setTimeout(() => {
      this.setFullName();
    }, 1000);
    if(this.state.fName==="" || this.state.fName.length < 5){
      this.setState({fNEmpitied:true})
    }else{
      this.setState({fNEmpitied:false})
    }
    this.submitHandler();
  };
  onLNameChange = e => {
    this.setState({ lName: e.target.value });
    setTimeout(() => {
      this.setFullName();
    }, 1000);

    if(this.state.lName==="" || this.state.lName.length < 5){
      this.setState({lNEmpitied:true})
    }else{
      this.setState({lNEmpitied:false})
    }
    this.submitHandler();
  };
  onEmailChange = e => {
    this.setState({ email: e.target.value });
    if(e.target.value.match(this.props.mailFormat) && e.target.value !== ""){
      this.setState({emailNotFormated: false})
    }else{
      this.setState({emailNotFormated: true})
    }
    this.submitHandler();
  };
  onPasswordChange = e => {
    this.setState({ password: e.target.value });
    if(this.state.password==="" || this.state.password.length < 5){
      this.setState({pasEmpitied:true})
      // console.log(true)
    }else{
      this.setState({pasEmpitied:false})
    }
    this.submitHandler();
  };

  setFullName=()=> {
    this.setState({ fullName: this.state.fName + " " + this.state.lName });
  }

  submitHandler = ()=>{
    const {
      fNEmpitied,
      lNEmpitied,
      pasEmpitied,
      emailNotFormated
    } = this.state
    if(
      fNEmpitied &&
      lNEmpitied &&
      pasEmpitied &&
      emailNotFormated
    ){
      this.setState({canSubmit: false})
      console.log("true")
      return false;
    }else {
      this.setState({canSubmit: true})
      console.log("fn",fNEmpitied,
       "\n lan", lNEmpitied,
       "\n pas", pasEmpitied,
       "\n email", emailNotFormated); 
      return true
    }
  }

  // componentDidMount(){
  //   this.submitHandler();
  // }
  
  render() {
    // this.submitHandler();
    const { fName, lName, fullName, email, password } = this.state;
    
    return (
      <div className="backgroundLinear1 text-light pt-5 pb-5 pl-2 pr-2">
        <div className="container">
          <div className="signInForm ml-auto mr-auto">
            <h2>Register</h2>

            <form action="">
              <div className="form-group">
                <label className="db fw6 lh-copy f6" htmlFor="Fname">
                  First Name
                </label>
                <input
                  onChange={this.onFNameChange}
                  type="text"
                  className="text-light form-control white pa2  bg-transparent"
                  name="Fname"
                  id="Fname"
                  required
                />
                <label htmlFor="Fname" className="animated-label" />
                
              </div>
              <div
                  className={`mt-1 alert alert-danger d-none ${
                    this.state.fNEmpitied ? "d-block" : "d-none"
                  }`}
                >
                  First name must not be empitied and must contain at least 5 characters
                </div>

              <div className="form-group">
                <label className="db fw6 lh-copy f6" htmlFor="Lname">
                  Last Name
                </label>
                <input
                  onChange={this.onLNameChange}
                  type="text"
                  className="text-light form-control white pa2  bg-transparent"
                  name="Lname"
                  id="Lname"
                  required
                />
                <label htmlFor="Lname" className="animated-label" />
              </div>

              <div
                  className={`mt-1 alert alert-danger d-none ${
                    this.state.lNEmpitied ? "d-block" : "d-none"
                  }`}
                >
                  Last name must not be empitied and must contain at least 5 characters
                </div>

              <div className="form-group">
                <label className="db fw6 lh-copy f6" htmlFor="email">
                  E-mail
                </label>
                <input
                  onChange={this.onEmailChange}
                  type="email"
                  className="text-light form-control white pa2  bg-transparent"
                  name="email"
                  id="email"
                  required
                />
                <label htmlFor="email" className="animated-label" />
              </div>
              <div
                  className={`mt-1 alert alert-danger d-none ${
                    this.state.emailNotFormated ? "d-block" : "d-none"
                  }`}
                >
                  Email must not be empitied and Contain an @ symbol and .domainname in
                  end.
                </div>

              <div className="form-group">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={this.onPasswordChange}
                  type="password"
                  className="form-control white pa2  bg-transparent text-light "
                  name="password"
                  id="password"
                  required
                />
                <label htmlFor="password" className="animated-label" />
              </div>
              <div
                  className={`mt-1 alert alert-danger d-none ${
                    this.state.pasEmpitied ? "d-block" : "d-none"
                  }`}
                >
                  Password must not be empitied and at least 6 char
                </div>   

              <div className="">
                <button
                  className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib text-light"
                  type="submit"
                  onClick={() =>
                    this.props.register(fName, lName, fullName, email, password)
                  }
                  disabled={!this.state.canSubmit}
                  value="Register"
                >Register</button>
              </div>
              <div className="lh-copy mt3">
                Already a member{" "}
                <Link to="/forms/signin" className="blue hover-white d-inline-block">
                  {" "}
                  Login here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
