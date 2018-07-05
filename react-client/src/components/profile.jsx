import React, {Component} from 'react';
import Register from './Register.jsx';


class Profile extends React.Component {

 render (){
   return(
     <div className="col-2">
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
     <h1>{this.props.s}</h1>
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

     </div>
 )
 }


}
export default Profile
