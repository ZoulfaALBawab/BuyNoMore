import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory , Switch  } from "react-router-dom";
import MapContainer from './Gmaps.jsx';
import Search from './Search.jsx';
import Login from './Login.jsx';
import ItemsList from './ItemsList.jsx';


class Register extends React.Component {

	constructor(props){

		super(props);

		this.state = {
			fullName: '',
			email: '',
			password: '',
			confirmPass:''
		}

		this.handleClickRegister = this.handleClickRegister.bind(this);
		this.handleChangeFullName = this.handleChangeFullName.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePass = this.handleChangePass.bind(this);
		this.handleChangeConfirmPass = this.handleChangeConfirmPass.bind(this);
	}

	handleClickRegister(){
		console.log(this.state);
		$.ajax({
			type:'POST',
			url: '/register',
			data:{
				fullName: this.state.fullName,
				email: this.state.email,
				password: this.state.password,
	     		confirmPass: this.state.confirmPass
			},

			success: (data) => {
				console.log("Success in register POST!", data);
				window.location.href = "/register";

			},
			error: (err) => {
				console.log("Error in register POST!", err);
			}
		})
	}

	handleChangeFullName(e){
     this.setState({ fullName: e.target.value });
     console.log(this.state.fullName);
	}

	handleChangeEmail(e){
     this.setState({ email: e.target.value });
     console.log(this.state.email);
	}

	handleChangePass(evt){
     this.setState({ password: evt.target.value });
     console.log(this.state.password);
	}

	handleChangeConfirmPass(evt){
     this.setState({ confirmPass: evt.target.value });
     console.log(this.state.confirmPass);
	}

	render(){

	return (

	<div>
		<br/>
		<Search/>
		<br/>
		<div className="row">
			<div className="col-2">
				<div className="card" style={{width:'18rem'}}>
					<div className="card-body">
						<h1 className="card-title">Sign Up</h1>
						<br/>
						<label>Full Name</label>
						<br/>
						<input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name" type="text" name="Full Name" onChange={this.handleChangeFullName}/>
						<br/>
						<label>Email Address:</label>
						<br/>
						<input className="form-control" id="2" aria-describedby="emailHelp" placeholder="Email Address" type="text" name="Email Address" onChange={this.handleChangeEmail}/>
						<br/>
						<label>Password:</label>
						<br/>
						<input className="form-control" id="3" aria-describedby="emailHelp" placeholder="Password" type="password" name="Password" onChange={this.handleChangePass}/>
						<br/>
						<label>Confirm Password:</label>
						<br/>
						<input className="form-control" id="4" aria-describedby="emailHelp" placeholder="Password" type="password" name="Confirm Password" onChange={this.handleChangeConfirmPass}/>
						<br/>
						<button className="btn btn-outline-primary" onClick={this.handleClickRegister}>Sign Up</button>
					</div>
				</div>
				<div>
					<br/>
					<br/>
					<Login/>
				</div>



			</div>

			<div className="col-md-9" style={{height:'30rem'}}>
				<MapContainer/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>

				<div className="col-md-9" >

			<ItemsList/>

		</div>
		</div>
	</div>

	</div>
	);
	}

}



	export default Register;
