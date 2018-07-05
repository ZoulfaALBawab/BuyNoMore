import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      lat: 31.9454,
      lng: 35.9284,
      loc:[{lat:31.944,lng:35.9272,dis:{name:"*Mais*",dis:'Extra cement to give'}},{lat:31.9454,lng:35.9284,dis:{name:"*Nader*",dis:'Axe'}},{lat:31.9432,lng:35.9264,dis:{name:"*Ayman*",dis:'Hammer'}},{lat:31.9439,lng:35.9264,dis:{name:"*Zoulfa*",dis:'Drill'}}]
    }
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onMapClicked = this.onMapClicked.bind(this)

  }
  onMarkerClick (props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked (props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <div>
      <Map onClick={this.onMapClicked} google={this.props.google} zoom={ 15 } initialCenter = {{lng:this.state.lng,lat:this.state.lat}}>
      {this.state.loc.map((loc)=><Marker onClick = {this.onMarkerClick}
      position = {{lng:loc.lng,lat:loc.lat}} disc={loc.dis.name} name = {loc.dis.dis} />)}
      <InfoWindow
             marker={this.state.activeMarker}
             visible={this.state.showingInfoWindow}>
               <div>
                 <h1>{this.state.selectedPlace.name}</h1>
                 <h1>{this.state.selectedPlace.disc}</h1>

               </div>
           </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAjLGju0Hfbztam7hq5BqNnOMUmmA4Wgg8')
})(MapContainer)
