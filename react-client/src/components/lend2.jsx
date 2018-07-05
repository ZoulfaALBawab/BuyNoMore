import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';


class Lend extends React.Component{

 constructor(props){
		super(props);
		this.state = {
			itemName: '',
			itemDescription: '',
			PriceType: [itemPrice: '', isFree: false];
			address: '',
			itemImage: '',
			phoneNum: ''
		}
	}

 handleClickSubmitLendDetails(){




 }

 handleClickUploadImage(){




 }


	render(){

		return (
            <h1>Lend</h1>
			<div>
			<MuiThemeProvider>
			<div>
			<AppBar title ='lend'/>
			<TextField
			hintText = "Enter Your item title"
			floatingLabelText = "Item Title"
			onChange = {(event, newValue) => this.setState({itemName : newValue})}
			/>
			<br/>
			<TextField
			hintText = "Enter Your item description"
			floatingLabelText = "Item Description"
			onChange = {(event, newValue) => this.setState({itemDescription : newValue})}
			/>
			<br/>
			<label><input type="radio" name="opt1" id = "opt1">Price</label>
			<TextField
			hintText = "Enter Your item description"
			floatingLabelText = "Item Description"
			onChange = {(event, newValue) => this.setState({itemDescription : newValue})}
            <label><input type="radio" name="opt2" id = "opt2">Free</label>
			/>
			<br/>
			<TextField
			hintText = "Enter Your Address"
			floatingLabelText = "Address"
			onChange = {(event, newValue) => this.setState({address : newValue})}
			/>
			<br/>
			<TextField
			hintText = "Enter Your item image in jpg format"
			floatingLabelText = "Item Image"
			onChange = {(event, newValue) => this.setState({itemImage : newValue})}
			/>
			<br/>
			<RaisedButton label='Upload Image' primary={true} style={style} onClick={(event) => this.handleClickUploadImage(event)}/>
            <label><input type="radio" name="opt1" id = "opt2">Text2</label>
			<br/>
			<TextField
			hintText = "Enter Your phone number in an international format"
			floatingLabelText = "Phone Number"
			onChange = {(event, newValue) => this.setState({phoneNum : newValue})}
			/>
			<br/>
			<RaisedButton label='Submit' primary={true} style={style} onClick={(event) => this.handleClickSubmitLendDetails(event)}/>
			</div>
			</MuiThemeProvider>
			</div>
			);
	}

}
