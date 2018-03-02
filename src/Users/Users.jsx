import React, { Component } from 'react';
import './Users.css';

class Users extends Component {
  constructor(props) {
    super(props);

    this.name = this.props.name;
    this.picture = this.props.picture;
    this.disease = this.props.disease;
    this.location = this.props.location;
    this.deviceStatus = this.props.deviceStatus;
    this.locationName = this.props.locationName;

    this.batteryLevel = this.props.batteryLevel;
    this.connectionStatus = this.props.connectionStatus;
    this.wifiStrength = this.props.wifiStrength;
  }

  render() {
    const isBatteryLow = (this.batteryLevel < 20);
    return (
      <div class="row">
        <div class="col-7">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <div>
                <div class="content">
                  <img src={this.picture} />
                  <span>{this.name}<br /></span>
                  <span>{this.disease}, {this.locationName}</span>
                </div>
              </div>
              <hr />
              <p>
                <span><i class="material-icons" style={{ color: 'red' }}>place</i>Delinquency</span><br />
                <span><i class="material-icons" style={{ color: 'yellow' }}>place</i>Wearable</span><br />
                <span><i class="material-icons" style={{ color: 'yellow' }}>place</i>Device Kit</span><br />
                <span><i class="material-icons " style={{ color: 'blue' }}>warning</i>Proximity</span>
              </p>
              <hr />
              <p>
                Verification Failed<br />
                <span><img src={require('../assets/face-icon.png')} />Face Check Failed</span><br />
                <span><img src={require('../assets/nfc-icon.png')} />NFC Check Failed</span>
              </p>
              <hr />
              {
                this.connectionStatus ?
                  <span><img src={require('../assets/connected-icon.png')} />Connected</span>
                  : <span><img src={require('../assets/not-connected-icon.png')} />Not Connected</span>
              }
              {
                isBatteryLow ?
                  <span><img src={require('../assets/lobatt-icon.png')} />{this.batteryLevel}%</span>
                  : <span><img src={require('../assets/batt-icon.png')} />{this.batteryLevel}%</span>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;