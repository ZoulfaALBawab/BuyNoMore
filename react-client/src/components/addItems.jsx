import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// npm install react-radio-buttons --save
// npm install --save react-image-upload

class AddItems extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			nickname:'',
			itemname: '',
			itemDescription: '',
			//pictures: [],
			address: '',
			phoneNum: ''
		}

        this.handleNickNameChange = this.handleNickNameChange.bind(this);
		this.handleItemNameChange = this.handleItemNameChange.bind(this);
		this.handleItemDescriptionChange = this.handleItemDescriptionChange.bind(this);
		//this.imageChangedHandler = this.imageChangedHandler.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handlePhoneNumChange = this.handlePhoneNumChange.bind(this);
		this.handleClickSubmitLendDetails = this.handleClickSubmitLendDetails.bind(this);

	}


	handleNickNameChange (evt) {
		this.setState({ nickname: evt.target.value });
	}

	handleItemNameChange (evt) {
		this.setState({ itemName: evt.target.value });
	}

	handleItemDescriptionChange (evt) {
		this.setState({ itemDescription: evt.target.value });
	}

	// imageChangedHandler (event) {
 //        this.setState({pictures: event.target.files[0]})
 //        console.log(this.state.pictures)
 //    }

	handleLocationChange (evt) {
		this.setState({ address: evt.target.value });
	}

	handlePhoneNumChange (evt) {
		this.setState({ phoneNum: evt.target.value });
	}

	handleClickSubmitLendDetails(){

		console.log(this.state);

		$.ajax({
			type:'POST',
			url:'/addItems',
			data:{
				nickname: this.state.nickname,
				itemName: this.state.itemName,
				itemDescription: this.state.itemDescription,
				address: this.state.address,
				phoneNum: this.state.phoneNum,
				//pictures: this.state.pictures
			},
			success: (data) => {
				console.log("Success in submiting item details!", data);
				$("#successLendItemDetailsUpload").show();
			},
			error:  (err) => {
				console.log("Error in in submiting item details!", err);
				$("#errorLendItemDetailsUpload").show();
			}
		})
	}





	render(){

		return (

			<div>
			<h1>Add Items</h1>
			<form>

			<br/>
			<label>Item name:</label>
			<br/>
			<input type="text" name="Item Name" onChange={this.handleItemNameChange}/>
			<br/>
			<label>Item description:</label>
			<br/>
			<textarea rows="4" cols="50" onChange={this.handleItemDescriptionChange}/>
            <br/>
			<label>Item image:</label>
			<br/>
			<input type="file" onChange={this.imageChangedHandler}/>
			<br/>
			<label>Your location:</label>
			<br/>
			<input type="text" name="Location" onChange={this.handleLocationChange}/>
			<br/>
			<label>Your phone number:</label>
			<br/>
			<input type="text" name="Phone Number" onChange={this.handlePhoneNumChange}/>
			<br/>
            </form>
			<br/>
			<button onClick={this.handleClickSubmitLendDetails}>Upload</button>
			</div>
			);
	}

}

export default AddItems;
