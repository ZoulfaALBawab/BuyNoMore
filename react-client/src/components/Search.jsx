import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
//import { RadioGroup, RadioButton } from 'react-radio-buttons';


class Search extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			searchInput : '',
			searchOut : []
		}
	}

	render(){ // Render function should render only one component

		return (

		  <div>Search</div>
			
			);
		}
	}

export default Search;
