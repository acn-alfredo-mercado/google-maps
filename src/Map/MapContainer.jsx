import React, { Component } from 'react';
import './MapContainer.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Users from '../Users/Users';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      currentLocation: {
        lat: 1.294143,
        lng: 103.853278
      }
    }

    this.latitude = this.props.latitude;
    this.longitude = this.props.longitude;

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.iconStatus = this.iconStatus.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      currentLocation: {
        lat: 3.294143,
        lng: 103.853278
      }
    });
    console.log(this.state.currentLocation)
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   this.setState({
  //     currentLocation: this.props.center
  //   })
  //  }
  iconStatus(faceCheck, nfc, proximity, polling) {
    if (faceCheck === false && nfc === false) {
      return "blue-status-icon.png";
    } else if (faceCheck === false && nfc === false && proximity === false) {
      return "red-status-icon.png";
    } else if (faceCheck === false && nfc === false && proximity === false && polling === false) {
      return "orange-status-icon.png";
    } else {
      return "green-status-icon.png";
    }
  }

  render() {
    return (
      <Map google={this.props.google}
        onClick={this.onMapClicked}
        zoom={12}
        initialCenter={
          this.state.currentLocation
        }>
        {
          this.props.users.map(user => (
            // const iconStatus = user.compliant.face_check
            // const iconStatus1 = user.compliant.nfc;
            <Marker
              onClick={this.onMarkerClick}
              position={{ lat: user.location.latitude, lng: user.location.longitude }}
              icon={{ 
                // url: require("../assets/green-status-icon.png")
                url: require("../assets/red-status-icon.png")
              }}
            />
          ))
        }
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>Hey</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDG3zeYE-3CTYjqKh01HJ2n0cuEhWYDs6Q')
})(MapContainer)
