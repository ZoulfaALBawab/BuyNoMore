import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddItems from './addItems.jsx'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';

// npm install --save bootstrap
// npm install react-bootstrap --save

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {

			galleryItemsLend: [{nickname: "Zolfaa", itemName: "Drill1", phoneNum:"123" }, {nickname: "Mais", itemName: "Drill2", phoneNum:"987"}, {nickname:"Ali", itemName: "Drill3", phoneNum:"9876"}],
		  galleryItemsBorrow: [{nickname: "Zolfaa1", itemName: "Drill11", phoneNum:"1231" }, {nickname: "Mais1", itemName: "Drill21", phoneNum:"9871"}, {nickname:"Ali1", itemName: "Drill31", phoneNum:"98761"}]

		}
		// this.handleClickRegister = this.handleClickRegister.bind(this);
		this.handleClickLogOut = this.handleClickLogOut.bind(this);
	}

	handleClickLogOut(){
	 console.log("logout button")
	 window.location.href = '/login';
	}

	// componentDidMount() {
	// }

	render (){
    return(
<div className="row">
      <div className="col-md-2">
        <div className="card" style={{width:'25rem'}}>
          <div className="card-body">
      <div className="card hovercard" >
      <div className="cardheader">

      </div>
      <div className="avatar" className='card'>
      <img alt="" src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg" style={{width: '22rem'}}></img>
      </div>
      <div className="info">
      <div className="title">
      <h1>Donald Trump</h1>
      </div>
      <p>Passionate Mechanic</p>
      <p>Curious developer</p>
      <p>Drill Lover</p>
      </div>
      <div>
      </div>
      </div>

      <table>
  <thead>
    <tr>
        <th>Name</th>
        <th>Item Name</th>
        <th>Item Status</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Alvin</td>
      <td>Eclair</td>
      <td>Borrow</td>
    </tr>
    <tr>
      <td>Alan</td>
      <td>Jellybean</td>
      <td>Borrow</td>
    </tr>
    <tr>
      <td>Jonathan</td>
      <td>Lollipop</td>
      <td>Lend</td>
    </tr>

  </tbody>
 </table>
      </div>


      </div>
			<div className = 'container'>
			<div className = 'col-md-6'>

			<AddItems/>
			</div>
		</div>


      </div>
		</div>

  )
  }
}

export default Home;
