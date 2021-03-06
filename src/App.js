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
      user: [],
      userLocation: {},
      showingInfoWindow: false
    }
  }

  componentWillMount() {
    this.db.on('value', snapshot => {
      var users = [];
      snapshot.forEach((data) => {
        var user = data.val();
        users.push(user);
      })

      this.setState({
        users: users
      });
    });
  }

  getDetails(user) {
    this.setState({
      showingInfoWindow: true,
      user: user,
      userLocation: {
        lat: user.location.latitude,
        lng: user.location.longitude
      }
    })
  }

  closeWindow() {
    this.setState({
      showingInfoWindow: false
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="map">
          <MapContainer {...this.state} />
        </div>

        {
          !this.state.showingInfoWindow ? `` :
            <div className="over_map">
              <UserInfo
                {...this.state}
                closeWindow={this.closeWindow.bind(this)}
                getDetails={this.getDetails.bind(this, this.state.user)} />
            </div>
        }

        <div className="users">
          <h4>Cases</h4>
          {
            this.state.users.map((user, index) => {
              return (
                <div className="userList" key={index} onClick={() => this.getDetails(user)}>
                  <Users
                    key={index}
                    data-id={index}
                    {...this.state}
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
