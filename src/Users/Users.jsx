import React, { Component } from 'react';
import './Users.css';

class Users extends Component {
  constructor(props) {
    super(props);

    this.name = this.props.name;
    this.disease = this.props.disease;
    this.location = this.props.location;
    this.deviceStatus = this.props.deviceStatus;
  }
  render() {
    return (
      <div class="row">
        <div class="col-7">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <div class="inline"><span class="card-text"><img src=''/>{this.name}</span><br/><span>{this.disease}</span></div>
              <p>Details</p>
            </div>
            <div class="card-action">
              <p>battery status</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;