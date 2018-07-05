import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';


class Search extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			searchInput : '',
			searchOut : []
		}
		this.handleSearchInput = this.handleSearchInput.bind(this);
		this.handleClickSearch = this.handleClickSearch.bind(this);
	}

	handleSearchInput(evt){
    this.setState({ searchInput: evt.target.value });
	}

	handleClickSearch(){
		$.ajax({
			type:'GET',
			url:'/search',
			data: {Q : this.state.searchInput},
			success: (data) => {
				console.log("Success in GET search!", data);
				this.setState({searchOut: data});	
			},
			error: (req, status, err) => {
				console.log("Error in GET search!", err);
			}
		})
	}

	render(){ // Render function should render only one component

		return (

		  <div>
            <h1>Search</h1>
			 <div class="container">
			  <div class="row">

			   <input type="text" name="SearchItems" placeholder='Please enter the item name' onChange={this.handleSearchInput}/>
			    <button type="button" class="btn btn-primary" onclick="handleClickSearch()">Search</button>
                 {this.state.searchOut.map((item) => {

                  return (
                  	<div>
                   <div class='col-lg-3 col-md-4 col-sm-6'>
				    <a href="#"><img src= {item.src} className="img-responsive img-thumbnail"/></a>
				    <br/>
				   </div>
				   <div>
				    <p>{item.OwnerName}</p>
				     <br/>
				      <a href="#">{item.title}</a>
				       <br/>
				      <a href="#">{item.price}</a>
				     <br/>
				   </div>
				   </div>
               )
            })}

			 </div>
			</div>
	      </div>
			
			);
		}
	}

export default Search;
