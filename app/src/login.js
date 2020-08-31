import React,{Component} from 'react';
import './login.css';
import App from './App';

class Login extends Component{
	constructor(){
		super();
		this.Name=React.createRef();
		this.Password=React.createRef();
		this.Cnf_password=React.createRef();
		this.Email=React.createRef();
		this.Login_email=React.createRef();
		this.Login_password=React.createRef();
		this.state={
			status: 0,
		}
	}
	login=()=>{
		var email=this.Login_email.current.value;
		var password=this.Login_password.current.value;
		fetch('/users/login',{
			method:"post",
			body:JSON.stringify({email:email,password:password}),
			headers:{
				"Content-Type":"Application/json",
				"credentials":"same-origin",
			}
		})
		.then(response=>{
			if(response.status===401){
				window.alert("Authentication Failed !!...");
				return;
			}
			return response.json();
		})
		.then(data=>{
			console.log(data.Status);
			if(data.Status && data.Status==="success"){
				this.setState({
					status:1,
				})
			}
		})
	}
	signup=()=>{
		var Name=this.Name.current.value;
		var Password=this.Password.current.value;
		var Cnf_password=this.Cnf_password.current.value;
		var Email=this.Email.current.value;
		if(Name===""){
			window.alert("Name should not be Empty!!!...");
			return;
		}
		if(Password.length<6){
			window.alert("Password Length should be greater then equal to 6 !!!...");
			return;
		}
		if(Password!==Cnf_password){
			window.alert("Repeat password is not same!!!....");
			return;
		}
		if(Email.search("@")===-1){
			window.alert("Email is not Valid !!!.....");
			return;
		}
		fetch("/users/signup",{
			method:"Post",
			body:JSON.stringify({Name:Name,Password:Password,Email:Email}),
			headers:{
				'Content-Type':"Application/json",
				'credentials':"same-origin",
			}
		})
		.then((response)=>response.json())
		.then((data)=>{
			if(data.status==="Success"){
				window.alert("you have sccessfully created an Account Try Login Now..");
			}
			else{
				window.alert("User With this Email Already Exist!!!....");
			}
		});
		return;

	}
    render(){
	if(this.state.status===0){
		console.log(this.state.status);
        return(
	<div className="container">
	<div className="filter-layer">
    <div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label for="user" className="label">Email Address</label>
					<input id="user" type="text" className="input" ref={this.Login_email}/>
				</div>
				<div className="group">
                    <label for="pass" className="label" >Password</label>
					<input id="pass" type="password" className="input" data-type="password" ref={this.Login_password}/>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign In" onClick={this.login}/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk" onClick={()=>{window.location.href="/users/google"}}>
                    <img src="https://img.icons8.com/color/30/000000/google-logo.png"/> 
					<label className="google-login-text">Google login</label>
				</div>
			</div>
			<div className="sign-up-htm">
				<div className="group">
					<label for="user" className="label">Full Name</label>
					<input id="user" type="text" className="input" ref={this.Name}/>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password" ref={this.Password}/>
				</div>
				<div className="group">
					<label for="pass" className="label">Repeat Password</label>
					<input id="pass" type="password" className="input" data-type="password" ref={this.Cnf_password}/>
				</div>
				<div className="group">
					<label for="pass" className="label">Email Address</label>
					<input id="pass" type="text" className="input" ref={this.Email}/>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign Up" onClick={this.signup}/>
				</div>
				<div className="hr"></div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
		)
		}
else{
	console.log(this.state.status);
	return(
		<App/>
	)
}
    }
}
export default Login;