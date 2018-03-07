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
    this.isFaceCheck = this.props.isFaceCheck;
    this.isNfc = this.props.isNfc;
    this.isPolling = this.props.isPolling;

    this.batteryLevel = this.props.batteryLevel;
    this.connectionStatus = this.props.connectionStatus;
    this.wifiStrength = this.props.wifiStrength;

    // functions
    this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
    this.batteryStatus = this.batteryStatus.bind(this);
    this.wifiConnectionStatus = this.wifiConnectionStatus.bind(this);
    this.proximityStatus = this.proximityStatus.bind(this);
  }

   capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  verificationStatus() {
    if (this.faceCheck === false || this.nfc === false) {
      return <div>
        <hr />
        Verification Failed<br />
        {this.faceCheck ? `` :
        <span className="verificationIcon"><img src={require('../assets/face-icon.png')} hspace="10" />Face Check Failed<br /></span> }
        {this.nfc ? `` :
        <span className="verificationIcon"><img src={require('../assets/nfc-icon.png')} hspace="10" />NFC Check Failed</span>}
      </div>;
    } else {
      return false;
    }
  }

  proximityStatus(faceCheck, nfc, proximity, polling) {
    if (faceCheck === true && nfc === true && proximity === true && polling === true) {
      return <span><i class="material-icons " style={{ color: '#4caf50' }}>location_on</i>Within Proximity</span>;
    } else if (faceCheck === false && nfc === false && proximity === false && polling === true) {
      return <span><i class="material-icons " style={{ color: '#e34343' }}>location_off</i>Outside Proximity
             <p className="time">Check in required.</p></span>
    } else if (faceCheck === false && nfc === false && proximity === true && polling === true) {
      return <span><i class="material-icons " style={{ color: '#42a5f5' }}>location_on</i>Within Proximity
              <p className="time">Check in required.</p></span>
              
    }
  }

  wifiConnectionStatus(connectionStatus) {
    if (connectionStatus) {
      return <span className="iconFooter"><img src={require('../assets/connected-icon.png')} hspace="10" />Connected</span>;
    } else {
      return <span className="iconFooter"><img src={require('../assets/not-connected-icon.png')} hspace="10" />Not Connected</span>;
    }
  }

  batteryStatus(batteryLevel) {
    const isBatteryLow = (batteryLevel < 20);
    if (isBatteryLow) {
      return "lobatt-icon.png";
    } else {
      return "batt-icon.png";
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
                  <p className="title">{this.name}<br /></p>
                  <p className="subtitle">{this.disease}, {this.locationName}</p>
                </div>
              </div>
              <div>
                <hr />
                {
                  !this.delinquent ? `` :
                    <div>
                      <p><i class="material-icons" style={{ color: '#e34343' }}>warning</i>Delinquent Status</p>
                      <p className="time">Last update {dateString} </p>
                    </div>
                }
                {
                  Object.keys(this.deviceType).map((key, index) => {
                    return (
                      (this.deviceType[key].proximity || this.isPolling) ? `` :
                      <span className="capitalize"><i class="material-icons" style={{ color: '#f8bd0d' }}>warning</i>
                        {this.capitalizeFirstLetter(this.deviceType[key].type)} Not Updating<br />
                         <p className="time">Last update {dateString} </p>
                      </span>
                    )
                  })
                }
                {this.proximityStatus(this.isFaceCheck, this.isNfc, this.proximity, this.isPolling)}
              </div>
              {this.verificationStatus()}
              <hr />
              {this.wifiConnectionStatus(this.connectionStatus)}
              {<span className="iconFooter"><img src={require('../assets/' + this.batteryStatus(this.batteryLevel))} hspace="10" />{this.batteryLevel}%</span>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
