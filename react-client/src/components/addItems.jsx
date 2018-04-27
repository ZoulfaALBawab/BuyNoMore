import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import AppBar from 'material-ui/AppBar';
//import RaisedButton from 'material-ui/RaisedButton';
//import TextField from 'material-ui/TextField';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
//import { RadioGroup, RadioButton } from 'react-radio-buttons';
//import ImageUploader from 'react-image-upload';

// npm install react-radio-buttons --save
// npm install --save react-image-upload

class AddItems extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			itemName: '',
			itemDescription: '',
			PriceOpt: '',
			pictures: [],
			address: '',
			phoneNum: '',
			checkedPrice: false,
			itemPrice: ''
		}

	}

	render(){

		return (
			
			<div>Add Items</div>
			);
	}

}

export default AddItems;