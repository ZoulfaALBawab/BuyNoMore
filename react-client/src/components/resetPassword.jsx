// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';



// class ResetPass extends React.Component {

// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			newPass: '',
// 			confirmPass: ''
// 		}
// 		this.handleClickResetPass = this.handleClickResetPass.bind(this);
// 	}

// 	handleClickResetPass(){
// 		$.ajax({
// 			type:'POST',
// 			url:'/resetPassword',
// 			data:{
// 				newPass: this.state.newPass,
// 				confirmPass: this.state.confirmPass
// 			},
// 			success = function(data){
// 				console.log("Success in resetPassword POST!", data);
// 				$("#successResetPass").show();
// 				window.location.href = '/login';
// 				// or render to login page from the server side.	
// 			},
// 			error = function(req, status, err){
// 				console.log("Error in resetPassword POST!");
// 				$("#errorResetPass").show();
// 				window.location.href = '/resetPassword';
// 			}
// 		})
// 	}

// 	render(){
// 		return (
// 			<div>
// 			<h1>Reset Password</h1>
// 			<br/>
// 			<br/>
// 			<div>
// 			<MuiThemeProvider>
// 			<div>
// 			<AppBar title ='Reset Password'/>
// 			<TexField ref='password'
//             hintText="Enter your password"
//             floatingLabelText="Password"
//             type="password">
//             </TextField>
//             onChange = {(event, newValue) => this.setState({password : newValue})}
// 			/>
// 			<TexField ref='password'
//             hintText="Confirm password"
//             floatingLabelText="Confirm Password"
//             type="password">
//             </TextField>
//             onChange = {(event, newValue) => this.setState({confirmPass : newValue})}
// 			/>
// 			<br/>
// 			<RaisedButton label='Update Password' primary={true} style={style} onClick={(event) => this.handleClickResetPass(event)}/>
// 			</div>
// 			</MuiThemeProvider>
// 			</div>
// 			</div>
// 			);
// 	}
// }