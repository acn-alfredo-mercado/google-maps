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

    this.delinquent = this.props.delinquent;
    this.timeStamp = new Date(this.props.timeStamp * 1000);

    this.deviceProximity = this.props.deviceProximity;
    this.deviceType = this.props.deviceType;
    this.deviceTimestamp = new Date(this.props.deviceTimestamp * 1000);

    this.faceCheck = this.props.faceCheck;
    this.nfc = this.props.nfc;
    this.proximity = this.props.proximity;

    this.batteryLevel = this.props.batteryLevel;
    this.connectionStatus = this.props.connectionStatus;
    this.wifiStrength = this.props.wifiStrength;

    this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
    this.batteryStatus = this.batteryStatus.bind(this);
    this.wifiConnectionStatus = this.wifiConnectionStatus.bind(this);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  batteryStatus() {
    const isBatteryLow = (this.batteryLevel < 20);
    if (isBatteryLow) {
      return "lobatt-icon.png";
    } else {
      return "batt-icon.png";
    }
  }

  wifiConnectionStatus() {
    if (this.connectionStatus) {
      return <span><img src={require('../assets/connected-icon.png')} />Connected</span>;
    } else {
      return <span><img src={require('../assets/not-connected-icon.png')} />Not Connected</span>;
    }
  }

  verificationStatus() {
    if (this.faceCheck === false && this.nfc === false) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const dateString = this.timeStamp.toLocaleTimeString();
    const dateDevice = this.timeStamp.toLocaleDateString();
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
              <div>
                <hr />
                {
                  !this.delinquent ?
                    ``
                    : <span><i class="material-icons" style={{ color: '#e34343' }}>warning</i>Delinquent Status <br />
                      {dateString} <br />
                    </span>
                }
                {/* {
                  this.props.devices.map(device => (
                    Object.keys(device).forEach(element => {
                      <span><i class="material-icons" style={{ color: '#f8bd0d' }}>warning</i>{device.type}<br /></span> //returns 14 objects
                      console.log(device[element])
                    })
                  ))
                }  */}
                {
                  this.props.devices.map((device, index) => (
                    <span><i class="material-icons" style={{ color: '#f8bd0d' }}>warning</i>{device.type} {index} Not Updating<br />
                      {dateString} <br />
                    </span>
                  ))
                }
                {
                  !!this.proximity ?
                    <span><i class="material-icons " style={{ color: '#4caf50' }}>place</i>Within Proximity</span>
                    : ``
                }
              </div>
              {
                this.verificationStatus() ?
                  <div>
                    <hr />
                    Verification Failed<br />
                    <span style={{ paddingLeft: '2em' }}><img src={require('../assets/face-icon.png')} />Face Check Failed<br /></span>
                    <span style={{ paddingLeft: '2em' }}><img src={require('../assets/nfc-icon.png')} />NFC Check Failed</span>
                  </div>
                  : ``
              }
              <hr />
              { this.wifiConnectionStatus() }
              { <span><img src={require('../assets/' + this.batteryStatus(this.batteryLevel))} />{this.batteryLevel}%</span> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
