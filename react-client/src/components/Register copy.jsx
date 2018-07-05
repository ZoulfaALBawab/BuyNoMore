
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


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

			<div>
			<MuiThemeProvider>
			<div>
			<AppBar title ='login'/>

			<TextField
			hintText = "Enter Your First Name"
			floatingLabelText = "First Name"
			onChange = {(event, newValue) => this.setState({firstName : newValue})}
			/>

			<br/>

			<TextField
			hintText = "Enter Your Last Name"
			floatingLabelText = "Last Name"
			onChange = {(event, newValue) => this.setState({lastName : newValue})}
			/>

			<br/>

			<TextField
			hintText = "Enter Your Email Address"
			floatingLabelText = "Email Address"
			onChange = {(event, newValue) => this.setState({email : newValue})}
			/>

			<br/>

			<TexField
			hintText = "Enter your password"
			floatingLabelText = "Password"
			onChange = {(event, newValue) => this.setState({password : newValue})}
			/>

			<br/>

			<TextField
			hintText = "Enter your phone number"
			floatingLabelText = "Phone number"
			onChange = {(event, newValue) => this.setState({phone : newValue})}
			/>

			<br/>

			<TextField
			hintText = "Enter your location"
			floatingLabelText = "Location"
			onChange = {(event, newValue) => this.setState({location : newValue})}
			/>

			<br/>

			<RaisedButton label='Register' primary={true} style={style} onClick={(event) => this.handleClick(event)}/>

			</div>
			</MuiThemeProvider>
			</div>

			)

		}


	}
