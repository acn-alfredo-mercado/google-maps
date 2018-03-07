import React, { Component } from 'react';
import './UserInfo.css';

class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }

        this.closeUserInfo = this.closeUserInfo.bind(this);
    }

    closeUserInfo() {
        this.props.closeWindow();
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

    verificationStatus(faceCheck, nfc) {
        if (faceCheck === false || nfc === false) {
          return <div>
            <hr />
            Verification Failed<br />
            {faceCheck ? `` :
            <span className="verificationIcon"><img src={require('../assets/face-icon.png')} hspace="10" />Face Check Failed<br /></span> }
            {nfc ? `` :
            <span className="verificationIcon"><img src={require('../assets/nfc-icon.png')} hspace="10" />NFC Check Failed</span>}
          </div>;
        } else {
          return false;
        }
    }

    wifiConnectionStatus(connectionStatus) {
        if (connectionStatus) {
          return <span className="iconFooter"><img src={require('../assets/connected-icon.png')} hspace="10" />Connected<br/></span>;
        } else {
          return <span className="iconFooter"><img src={require('../assets/not-connected-icon.png')} hspace="10" />Not Connected<br/></span>;
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
        return (
            <div>
                <div class="card-content white-text">
                    <div class="content">
                    <span className="closebtn" onClick={() => this.closeUserInfo()}>&times;</span>
                    <img src={this.props.user.profile.picture} />
                    <p className="title">{this.props.user.name}<br/>
                        <span className="subtitle">{this.props.user.profile.disease}</span>
                    </p>
                </div>
                <div>
                <hr/>
                    <span className="title1">NRIC: </span><span className="title2">{this.props.user.profile.NRIC}<br /></span>
                    <span className="title1">Address: </span><span className="title2">{this.props.user.profile.address}<br /></span>
                    <span className="title1">Contact: </span><span className="title2">{this.props.user.profile.contact}<br /></span>
                    <hr />
                    <span className="title1">Status: </span>
                    <div className="statusDetails">
                {
                    !this.props.user.delinquency.delinquent ? ``
                    :<span><i class="material-icons" style={{ color: '#e34343' }}>warning</i>Delinquent Status <br /></span>
                }
                {
                  Object.keys(this.props.user.ble_devices).map((key, index) => {
                    return (
                        (this.props.user.ble_devices[key].proximity  || this.props.user.compliant.polling) ? `` :
                        <span><i class="material-icons" style={{ color: '#f8bd0d' }}>warning</i>
                          {this.props.user.ble_devices[key].type} Not Updating<br />
                        </span>
                    )
                  })
                }
                {this.proximityStatus(this.props.user.compliant.face_check, 
                                    this.props.user.compliant.nfc,
                                    this.props.user.compliant.proximity, 
                                    this.props.user.compliant.polling)}
                {this.verificationStatus(this.props.user.attempts.face_check, this.props.user.attempts.nfc)}
                <hr/>
               
                {this.wifiConnectionStatus(this.props.user.device_status.connection_status) }
                {<span className="iconFooter"><img src={require('../assets/' + this.batteryStatus(this.props.user.device_status.battery_level))} hspace="10" />{this.props.user.device_status.battery_level}%</span>}
                    </div>
                </div>
                </div>
            </div>
        );
    }
}


export default UserInfo;