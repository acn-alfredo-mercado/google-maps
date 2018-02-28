import React, { Component } from 'react';
import MapContainer from './Map/MapContainer';
import Users from './Users/Users';
import UserInfo from './UserInfo/UserInfo';
import './App.css';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {
  constructor(props) {
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('HOUSE_QUARANTINE');

    this.clickButton = this.clickButton.bind(this);

    this.state = {
      notes: []
    }
  }

  clickButton() {
    console.log(this.db);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="map"><MapContainer /></div>
        <div className="users"><Users /></div>
        <button>peps</button>
      </div>
    );
  }
}

export default App;
