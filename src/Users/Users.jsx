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
                  <span>{this.name}</span><br/>
                  <span>{this.disease}, {this.locationName}</span>
                </div>​
              </div>
              <hr/>
              <p>Details</p>
            </div>
            <hr/>
              <p>battery status</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;