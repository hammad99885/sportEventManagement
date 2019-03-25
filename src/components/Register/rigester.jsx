import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Register extends Component {
    state={
        fName:"",
        lName:"",
        fullName:  "",
        email:"",
        password:""
    }
    onFNameChange = (e)=>{
        this.setState({fName: e.target.value});
        setTimeout(()=>{
            this.setFullName();
        },1000)
        
    }
    onLNameChange = (e)=>{
        this.setState({lName: e.target.value});
        setTimeout(()=>{
            this.setFullName();
        },1000)
    }
    onEmailChange = (e)=>{
        this.setState({email: e.target.value});
    }
    onLPasswordChange = (e)=>{
        this.setState({password: e.target.value});
    }

    setFullName(){
        this.setState({fullName: this.state.fName +" "+ this.state.lName})
    }

    render(){
        const {fName, lName, fullName, email, password} = this.state        
        return (
            <div className="backgroundLinear1 text-light pt-5 pb-5 pl-2 pr-2">
                <div className="container">
                    <div className="signInForm ml-auto mr-auto">
                        <h2>Register</h2>
    
                        <form action="">
                            <div className="form-group" >
                                <label className="db fw6 lh-copy f6" htmlFor="Fname">First Name</label>
                                <input onChange={this.onFNameChange} type="text" className="text-light form-control white pa2  bg-transparent" name="Fname" id="Fname" required />
                                <label htmlFor="Fname" className="animated-label"></label>
                            </div>
    
                            <div className="form-group" >
                                <label className="db fw6 lh-copy f6" htmlFor="Lname">Last Name</label>
                                <input onChange={this.onLNameChange}  type="text" className="text-light form-control white pa2  bg-transparent" name="Lname" id="Lname" required />
                                <label htmlFor="Lname" className="animated-label"></label>
                            </div>
    
                            <div className="form-group" >
                                <label className="db fw6 lh-copy f6" htmlFor="email">E-mail</label>
                                <input onChange={this.onEmailChange}  type="email" className="text-light form-control white pa2  bg-transparent" name="email" id="email" required />
                                <label htmlFor="email" className="animated-label"></label>
                            </div>
    
                            <div className="form-group" >
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input onChange={this.onPasswordChange}  type="password" className="form-control white pa2  bg-transparent text-light " name="password" id="password" required />
                                <label htmlFor="password" className="animated-label"></label>
                            </div>
                            <div className="">
                                <input
    
                                    className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib text-light"
                                    type="submit"
                                    onClick={()=>this.props.register(fName, lName, fullName, email, password)}
                                    value="Register"
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
   
}

export default Register;