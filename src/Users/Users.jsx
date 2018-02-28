import React, { Component } from 'react';
import './Users.css';

class Users extends Component {
  render() {
    return (
      <div class="row">
        <h4>Cases</h4>
        <div class="col-7">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;