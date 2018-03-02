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
    }

    this.latitude = this.props.latitude;
    this.longitude = this.props.longitude;

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <Map google={this.props.google}
        onClick={this.onMapClicked}
        zoom={12}
        initialCenter={{
          lat: 1.294143,
          lng: 103.853278
        }}>
        {
          this.props.users.map(user => (
          <Marker
            onClick={this.onMarkerClick}
            position={{ lat: user.location.latitude, lng: user.location.longitude }}
          />
          ))
        }
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <Users />
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDG3zeYE-3CTYjqKh01HJ2n0cuEhWYDs6Q')
})(MapContainer)
