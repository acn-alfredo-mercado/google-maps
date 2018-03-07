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
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <div class="content">
                    <span className="closebtn" onClick={() => this.closeUserInfo()}>&times;</span>
                    <img src={this.props.user.profile.picture} />
                    <p className="title">{this.props.user.name},<br /></p>
                    <p className="subtitle">{this.props.user.profile.disease}</p>
                    <p>{this.props.user.location.latitude}, {this.props.user.location.longitude}</p>                    
                </div>
                <div>
                <hr/>
                    <span className="title1">NRIC: </span><span className="title2">{this.props.user.profile.NRIC}<br /></span>
                    <span className="title1">Address: </span><span className="title2">{this.props.user.profile.address}<br /></span>
                    <span className="title1">Contact: </span><span className="title2">{this.props.user.profile.contact}<br /></span>
                    <hr />
                    <span className="title1">Status: </span>
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
                </div>
                <hr />
                </div>
            </div>
        );
    }
}


export default UserInfo;