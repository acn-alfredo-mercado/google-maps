import React, { Component } from 'react';
import './UserInfo.css';

class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
    }

    render() {
        return (
        <div class="row">
            <div class="col-7">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                <div>
                    <div class="content">
                    <img src={this.picture} />
                    <p className="title">asdasdsa<br /></p>
                    <p className="subtitle">asdasdsa, asdasdasd</p>
                    </div>
                </div>
                <div>
                <hr />
                    <tr>
                        <td><span>NRIC</span></td>
                        <td><span>insert NRIC here</span></td>
                    </tr>
                    <tr>
                        <td><span>Address</span></td>
                        <td><span>insert Address here</span></td>
                    </tr>
                    <tr>
                        <td><span>Contact</span></td>
                        <td><span>insert Contact here</span></td>
                    </tr>
                </div>
                <hr />
                <tr rowspan="8">
                    <td>Status</td>
                    <td><span><i class="material-icons" style={{ color: '#e34343' }}>warning</i>Delinquent Status</span></td>
                </tr>
                <tr>
                    <td></td>
                    <td><span className="iconFooter"><img src={require('../assets/green-status-icon.png')} />123%</span></td>
                </tr>
                <tr>
                    <td></td>
                    <td><span className="iconFooter"><img src={require('../assets/green-status-icon.png')} />123%</span></td>
                </tr>
                <tr>
                    <td></td>
                    <td><span className="iconFooter"><img src={require('../assets/green-status-icon.png')} />123%</span></td>
                </tr>
                <tr>
                    <td></td>
                    <td><span className="iconFooter"><img src={require('../assets/green-status-icon.png')} />123%</span></td>
                </tr>
                </div>
            </div>
            </div>
        </div>
        );
    }
}


export default UserInfo;