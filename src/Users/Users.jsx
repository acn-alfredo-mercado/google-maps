import React, { Component } from 'react';
import './Users.css';
import UserHelper from './../utils/UserHelper';

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
    this.isFaceCheck = this.props.isFaceCheck;
    this.isNfc = this.props.isNfc;
    this.isPolling = this.props.isPolling;

    this.batteryLevel = this.props.batteryLevel;
    this.connectionStatus = this.props.connectionStatus;
    this.wifiStrength = this.props.wifiStrength;

    this.userHelper = new UserHelper();
  }

  checkDelinquent(delinquent) {
    return !delinquent ? `` :
      <div>
        <p><i class="material-icons" style={{ color: '#e34343' }}>warning</i>Delinquent Status</p>
        <p className="time">Last update  </p>
      </div>
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
                  <p className="title">{this.name}<br /></p>
                  <p className="subtitle">{this.disease}, {this.locationName}</p>
                </div>
              </div>
              <div>
                {
                  this.checkDelinquent(this.delinquent)
                }
                {
                  Object.keys(this.deviceType).map((key, index) => {
                    return (
                      (this.deviceType[key].proximity || this.isPolling) ? `` :
                        <span className="capitalize"><i class="material-icons" style={{ color: '#f8bd0d' }}>warning</i>
                          {this.userHelper.capitalizeFirstLetter(this.deviceType[key].type)} Not Updating<br />
                          <p className="time">Last update {dateString} </p>
                        </span>
                    )
                  })
                }
                {this.userHelper.proximityStatus(this.isFaceCheck, this.isNfc, this.proximity, this.isPolling)}
              </div>
              {this.userHelper.verificationStatus(this.faceCheck, this.nfc)}
              <hr />
              {this.userHelper.wifiConnectionStatus(this.connectionStatus)}
              {<span className="iconFooter"><img src={require('../assets/' + this.userHelper.batteryStatus(this.batteryLevel))} hspace="10" />{this.batteryLevel}%</span>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
