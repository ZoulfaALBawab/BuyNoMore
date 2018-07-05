
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';

// npm install --save bootstrap
// npm install react-bootstrap --save

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			galleryItems: []
		}
		// this.handleClickRegister = this.handleClickRegister.bind(this);
		// this.handleClickSignIn = this.handleClickSignIn.bind(this);
		this.handleClickAddItems = this.handleClickAddItems.bind(this);
	}

	componentDidMount() {

		// if the user is logged In, redirect the user to home_signIn.

		console.log('Home Gallery items are being uploaded!');
		$.ajax({
			type:'GET',
			url:'/',
			success: (data) => {
				console.log("Success in retrieving Home Gallery items!", data);
				this.setState({galleryItems: data});
			},
			error: (req, status, err) => {
				console.log("Error in retrieving Home Gallery items!", err);
				$("#errorHomeGalleryDownload").show();
			}
		})
	}

	handleClickAddItems() {
		window.location.href = '/addItems';
	}

	render(){
		return (
			<div>
			  <div1>
			    <a href="/register" >Register</a>
			    <a href="/login" >Sign In</a>
			    <button onclick="handleClickAddItems()">Add Items</button>
			  </div1>

			  <div2 class="container">
			    <div3 class="row">

                  {
<<<<<<< HEAD
                  		// this.state.galleryItems.map( (item) => {
          //           return (
          //             <div4 class='col-lg-3 col-md-4 col-sm-6'>
				      //   <a href="#"><img src= {item.src} className="img-responsive img-thumbnail"/></a>
				      //   <br/>
				      // </div4>,

				      // <div5>
				      //   <p>{item.OwnerName}</p>
				      //   <br/>
				      //   <a href="#">{item.title}</a>
				      //   <br/>
				      //   <a href="#">{item.price}</a>
				      //   <br/>
				      // </div5>

          //           )
                // })
=======
                  	this.state.galleryItems.map( (item) => {
                    return (
                      <div4 class='col-lg-3 col-md-4 col-sm-6'>
				        <a href="#"><img src= {item.src} className="img-responsive img-thumbnail"/></a>
				        <br/>
				      </div4>,
				      
				      <div5>
				        <p>{item.OwnerName}</p>
				        <br/>
				        <a href="#">{item.title}</a>
				        <br/>
				        <a href="#">{item.price}</a>
				        <br/>
				      </div5>
                    )
                })
>>>>>>> 709fabdb10d49927125dfc0d2ca65eac079d7a05
                  }
			    </div3>
			  </div2>
			</div>


			);
	}
}

export default Home;
