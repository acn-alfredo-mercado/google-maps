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
    this.deviceTimestamp = this.props.deviceTimestamp;

    this.faceCheck = this.props.faceCheck;
    this.nfc = this.props.nfc;
    this.proximity = this.props.proximity;

    this.batteryLevel = this.props.batteryLevel;
    this.connectionStatus = this.props.connectionStatus;
    this.wifiStrength = this.props.wifiStrength;
  }

  render() {
    const isBatteryLow = (this.batteryLevel < 20);
    const dateString = this.timeStamp.toLocaleTimeString();
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
                      {dateString} <br/>
                    </span>
                }
                {/* {
                  this.props.devices.map(device => (
                    Object.keys(device).forEach(element => {
                      <span><i class="material-icons" style={{ color: '#f8bd0d' }}>warning</i>{device.type}<br /></span> //returns 14 objects
                      console.log(device[element])
                    })
                  ))
                } */
                }
                {this.props.devices.map(device => {
                  <span><i class="material-icons" style={{ color: '#f8bd0d' }}>warning</i>{device.type}<br /></span> //returns 14 objects
                  })
                }
                {
                  !!this.proximity ?
                    <span><i class="material-icons " style={{ color: '#4caf50' }}>place</i>Within Proximity</span>
                    : ``
                }
              </div>
              {
                !this.faceCheck || !this.nfc ?
                  <div>
                    <hr />
                    Verification Failed<br />
                    <span style={{ paddingLeft: '2em' }}><img src={require('../assets/face-icon.png')} />Face Check Failed<br /></span>
                    <span style={{ paddingLeft: '2em' }}><img src={require('../assets/nfc-icon.png')} />NFC Check Failed</span>
                  </div>
                  : ``
              }
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