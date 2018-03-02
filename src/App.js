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
      users: []
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
      console.log(this.state.users);
     
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
          this.state.users.map((user) => {
            return (
                <div className="userList">
                  <Users 
                    name={user.name}
                    picture={user.profile.picture}
                    disease={user.profile.disease}
                    locationName={user.location.location_name}
                    connectionStatus={user.device_status.connection_status}
                    batteryLevel={user.device_status.battery_level}/>
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
