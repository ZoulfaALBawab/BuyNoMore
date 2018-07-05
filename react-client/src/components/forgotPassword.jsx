
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';



class ForgetPass extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			email: ''
		}
		this.handleClickFortgotPass = this.handleClickFortgotPass.bind(this);
		this.handleClickCancel = this.handleClickCancel.bind(this);
	}

	handleClickFortgotPass(){
		$.ajax({
			type:'POST',
			url:'/forgotPassword',
			data:{
				email: this.state.email
			},
			success = function(data){
				console.log("Success in forgotPassword POST!", data);
				window.location.href = '/resetPassword';
				// or render resetPasseord page from the server side.
			},
			error = function(req, status, err){
				console.log("Error in forgotPassword POST!");
				$("#emailNotFound").show(); // check first the returned error from the server side.
			}
		})
	}

	// handleClickCancel(){
	// 	window.location.href = '/login';
	// }

	// <a href="#" onClick={(event) => this.handleClickCancel(event)}>Cancel</a>

	render(){
		return (
			<h1>Forgot Password</h1>
			<br/>
			<br/>
			<h2>Please enter your email address below and we will send you an email shortly to change your password</h2>
			<div>
			<MuiThemeProvider>
			<div>
			<AppBar title ='forgot Password'/>
			<TextField
			hintText = "Enter Your Email Address"
			floatingLabelText = "Email Address"
			onChange = {(event, newValue) => this.setState({email : newValue})}
			/>
			<br/>
			<RaisedButton label='Send Email' primary={true} style={style} onClick={(event) => this.handleClickFortgotPass(event)}/>
			<a href="/login" >Cancel</a>
			</div>
			</MuiThemeProvider>
			</div>
			);
	}
}
export default ForgetPass;
