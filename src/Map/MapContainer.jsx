import React, { Component } from 'react';
import './MapContainer.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }

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
        <Marker onClick={this.onMarkerClick}
          name={'pre'} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div class="row">
            <div class="col-7">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                    <div class="content">
                      <img src={this.picture} />
                      <span>{this.name}</span><br />
                      <span>{this.disease}, {this.locationName}</span>
                    </div>
                  </div>
                  <hr />
                  <p>Details</p>
                </div>
                <hr />
                <p>battery status</p>
              </div>
            </div>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDG3zeYE-3CTYjqKh01HJ2n0cuEhWYDs6Q')
})(MapContainer)
