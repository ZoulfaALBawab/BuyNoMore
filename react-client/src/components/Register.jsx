
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class Register extends React.Component {

	constructor(props){

		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPass:''
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		$.ajax({
			type:'POST',
			url: '/resgiter',
			data:{
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				password: this.state.password,
				phone: this.state.phone,
				location:{
                latitude: this.state.location.latitude,
                longtitude: this.state.location.longtitude
				}
			},

			success: (data) => {
				console.log("Success in register POST!", data);
				window.location.href = "http://localhost:3000/login";

			},
			error(req, status, err){
				console.log("Error in register POST!",err);
			}
		})
	}

	handleChangeFirstName(){


	}

	handleChangeLastName(){

		
	}


	render(){

		return (
			<div>
			<h1>Sign Up</h1>
			<br/>
			<label>First Name:</label>
			<br/>
			<input type="text" name="Email Address" onChange={this.handleChangeFirstName}/>
			<br/>
			<label>LastName:</label>
			<br/>
			<input type="text" name="Password" onChange={this.handleChangeLastName}/>
			<br/>
			<label>Email Address:</label>
			<br/>
			<input type="text" name="Password" onChange={this.handleChangePass}/>
			<label>Password:</label>
			<br/>
			<input type="text" name="Password" onChange={this.handleChangeConfirmPass}/>
			<label>Confirm Password:</label>
			<br/>
			<button onClick={this.handleClickLogin}>Sign In</button>
			</div>
			);
	}


	}



	export default Register;

