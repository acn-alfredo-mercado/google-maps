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
    this.db = this.app.database().ref('HOUSE_QUARANTINE/DEV').child('USERS');
    // const adaRef = this.db.child('USERS');
    // const path = adaRef.toString();
    console.log(this.db);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.db.on('value', snapshot => {
      console.log(snapshot);
      this.setState({
        users: snapshot.val()
      });
    });

    // this.db.on('child_added', snap => {
    //   previousNotes.push({
    //     id: snap.key,
    //     noteContent: snap.val().noteContent,
    // })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="map"><MapContainer /></div>
        <div className="users"><Users />
        {
            // this.state.users.map((user) => {
            //   console.log(user);
            //   return (
            //     <UserInfo />
            //   )
            // })
        }
        </div>
      </div>
    );
  }
}

export default App;
