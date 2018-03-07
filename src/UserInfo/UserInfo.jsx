import React, { Component } from 'react';
import './UserInfo.css';
import UserHelper from './../utils/UserHelper';

class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }

        this.closeUserInfo = this.closeUserInfo.bind(this);
        this.userHelper = new UserHelper();
    }

    closeUserInfo() {
        this.props.closeWindow();
    }

    render() {
        return (
            <div>
                <div class="card-content white-text">
                    <div class="content">
                        <span className="closebtn" onClick={() => this.closeUserInfo()}>&times;</span>
                        <img src={this.props.user.profile.picture} />
                        <p className="title">{this.props.user.name}<br />
                            <span className="subtitle">{this.props.user.profile.disease}</span>
                        </p>
                    </div>
                    <div>
                        <hr />
                        <span className="title1">NRIC: </span><span className="title2">{this.props.user.profile.NRIC}<br /></span>
                        <span className="title1">Address: </span><span className="title2">{this.props.user.profile.address}<br /></span>
                        <span className="title1">Contact: </span><span className="title2">{this.props.user.profile.contact}<br /></span>
                        <hr />
                        <span className="title1">Status: </span>
                        <div className="statusDetails">
                            {
                                !this.props.user.delinquency.delinquent ? ``
                                    : <span><i class="material-icons" style={{ color: '#e34343' }}>warning</i>Delinquent Status <br /></span>
                            }
                            {
                                Object.keys(this.props.user.ble_devices).map((key, index) => {
                                    return (
                                        (this.props.user.ble_devices[key].proximity || this.props.user.compliant.polling) ? `` :
                                            <span><i class="material-icons" style={{ color: '#f8bd0d' }}>warning</i>
                                                {this.props.user.ble_devices[key].type} Not Updating<br />
                                            </span>
                                    )
                                })
                            }
                            {this.userHelper.proximityStatus(this.props.user.compliant.face_check,
                                this.props.user.compliant.nfc,
                                this.props.user.compliant.proximity,
                                this.props.user.compliant.polling)}
                            {this.userHelper.verificationStatus(this.props.user.attempts.face_check, this.props.user.attempts.nfc)}
                            <hr />

                            {this.userHelper.wifiConnectionStatus(this.props.user.device_status.connection_status)}
                            {<span className="iconFooter"><img src={require('../assets/' + this.userHelper.batteryStatus(this.props.user.device_status.battery_level))} hspace="10" />{this.props.user.device_status.battery_level}%</span>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default UserInfo;