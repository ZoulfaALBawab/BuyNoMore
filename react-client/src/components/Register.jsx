
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
			phone: '',
			location:{latitude: '',longtitude: ''}
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


	render(){

		return (

			<div>Register</div>

			)

		}


	}



	export default Register;

