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
    console.log(this.db);

    this.state = {
      users: []
    }
  }

  componentWillMount() {
    this.db.on('value', snapshot => {
      var mgaTao = [];
      snapshot.forEach((data) => {
        var tao = data.val();
        mgaTao.push(tao);
      })

      this.setState({
        users: mgaTao
      });
      console.log(this.state.users);
      
    });

  }

  render() {
    return (
      <div className="wrapper">
        <div className="map"><MapContainer /></div>
        <div className="users"><h4>Cases</h4>
        {
            this.state.users.map((user) => {
              console.log(user);
              return (
                 <div><Users name={user.name} disease={user.profile.disease}/></div>
              )
            })
        }
        </div>
      </div>
    );
  }
}

export default App;
