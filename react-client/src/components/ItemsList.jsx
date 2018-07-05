import MapContainer from './Gmaps.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class ItemsList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			galleryItems: [{nickname: "Zolfaa", itemName: "Drill1", phoneNum:"123" }, {nickname: "Mais", itemName: "Drill2", phoneNum:"987"}, {nickname:"Ali", itemName: "Drill3", phoneNum:"9876"}]
		}

	}
render(){

	return (
	<div>
		<div className="card" style={{width:'90rem'}}>
			<table class="table table-dark">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">Name</th>
			      <th scope="col">Item</th>
			      <th scope="col">Location</th>
						<th scope="col">Phone Number</th>

			    </tr>
					<br/>

			  </thead>
			  <tbody>
			    <tr>
			      <th scope="row">1</th>
			      <td>Mais</td>
			      <td>Extra Cement to give</td>
			      <td>@Abdulla Ben Z. Street</td>
						<td>0777 *** ****</td>

			    </tr>
					<br/>
			    <tr>
			      <th scope="row">2</th>
			      <td>Nader</td>
			      <td>Axe</td>
			      <td>@Muhammad Dar Ahmad Street</td>
						<td>079 *** ****</td>

			    </tr>
					<br/>

			    <tr>
			      <th scope="row">3</th>
			      <td>Zoulfa</td>
			      <td>Drill</td>
			      <td>@Omar Mattar</td>
						<td>079 *** ****</td>

			    </tr>
					<br/>

					<tr>
			      <th scope="row">4</th>
			      <td>Ayman</td>
			      <td>Hammer</td>
			      <td>@Jandaweel</td>
						<td>078 *** ****</td>

			    </tr>
			  </tbody>
			</table>
				</div>
			</div>


	  )
   }
}

export default ItemsList;
