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
    this.db = this.app.database().ref('HOUSE_QUARANTINE/DEV/USERS');

    this.state = {
      users: [],
      devices: []
    }

  }

  componentWillMount() {
    this.db.on('value', snapshot => {
      var users = [];
      var devices = [];
      snapshot.forEach((data) => {
        var device = data.child('ble_devices').val(); //returns 9 items
        var user = data.val();
        if (device !== null) {
          Object.keys(device).forEach(key => {
            // The ID is the key
            // console.log(key); // returns all 14 key / id
            // The Object is device[key]
            // devices.push(device[key]); // returns all 14 devices
            // console.log(device[key]);
          });
        }
        users.push(user);
        devices.push(device); //returns 9 items
      })

      this.setState({
        users: users,
        devices: devices
      });
      console.log(this.state.users);
      console.log(this.state.devices);

    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="map">
          <MapContainer {...this.state} />
        </div>
        <div className="users">
          <h4>Cases</h4>
          {
            this.state.users.map((user, index) => {
              return (
                <div className="userList" key={index}>
                  <Users
                    name={user.name}
                    picture={user.profile.picture}
                    disease={user.profile.disease}
                    delinquent={user.delinquency.delinquent}
                    timeStamp={user.delinquency.timestamp}
                    locationName={user.location.location_name}

                    deviceType={user.ble_devices}

                    proximity={user.compliant.proximity}
                    isFaceCheck={user.compliant.face_check}
                    isNfc={user.compliant.nfc}
                    isPolling={user.compliant.polling}

                    faceCheck={user.attempts.face_check}
                    nfc={user.attempts.nfc}
                    connectionStatus={user.device_status.connection_status}
                    batteryLevel={user.device_status.battery_level} />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
