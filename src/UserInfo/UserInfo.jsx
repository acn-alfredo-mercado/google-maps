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
                    <img src={this.props.user.profile.picture} />
                    <p className="title">{this.props.user.name}<br /></p>
                    <p className="subtitle">{this.props.user.profile.disease}, {this.props.user.location.location_name}</p>
                    </div>
                </div>
                <div>
                <hr/>
                    <span className="title">{this.props.user.profile.NRIC}<br /></span>
                    <span className="title">{this.props.user.profile.address}<br /></span>
                    <span className="title">{this.props.user.profile.contact}<br /></span>
                    <hr />
                {
                    !this.props.user.delinquency.delinquent ?
                    ``
                    : <span><i class="material-icons" style={{ color: '#e34343' }}>warning</i>Delinquent Status <br />
                    </span>
                }
                </div>
                <hr />
                </div>
            </div>
            </div>
        </div>
        );
    }
}


export default UserInfo;