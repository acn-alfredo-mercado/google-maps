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
                        this.props.user.ble_devices[key].proximity ? `` :
                        <span><i class="material-icons" style={{ color: '#f8bd0d' }}>warning</i>
                          {this.props.user.ble_devices[key].type} Not Updating<br />
                        </span>
                    )
                  })
                }
                <hr/>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}


export default UserInfo;