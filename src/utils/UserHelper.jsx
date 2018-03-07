import React, { Component } from 'react';

class UserHelper extends Component {
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    checkDelinquent(delinquent) {
        return !delinquent ? `` :
            <div>
                <p><i class="material-icons" style={{ color: '#e34343' }}>warning</i>Delinquent Status</p><br />
                <span className="time">Last update  </span>
            </div>
    }

    verificationStatus(faceCheck, nfc) {
        if (faceCheck === false || nfc === false) {
            return <div>
                <hr />
                Verification Failed<br />
                {faceCheck ? `` :
                    <span className="verificationIcon"><img src={require('../assets/face-icon.png')} hspace="10" />Face Check Failed<br /></span>}
                {nfc ? `` :
                    <span className="verificationIcon"><img src={require('../assets/nfc-icon.png')} hspace="10" />NFC Check Failed</span>}
            </div>;
        } else {
            return false;
        }
    }

    proximityStatus(faceCheck, nfc, proximity, polling) {
        if (faceCheck === true && nfc === true && proximity === true && polling === true) {
            return <span><i class="material-icons " style={{ color: '#4caf50' }}>location_on</i>Within Proximity</span>;
        } else if (faceCheck === false && nfc === false && proximity === false && polling === true) {
            return <span><i class="material-icons " style={{ color: '#e34343' }}>location_off</i>Outside Proximity
                 <p className="time">Check in required.</p></span>
        } else if (faceCheck === false && nfc === false && proximity === true && polling === true) {
            return <span><i class="material-icons " style={{ color: '#42a5f5' }}>location_on</i>Within Proximity
                  <p className="time">Check in required.</p></span>
        }
    }

    wifiConnectionStatus(connectionStatus) {
        if (connectionStatus) {
            return <span className="iconFooter"><img src={require('../assets/connected-icon.png')} hspace="10" />Connected</span>;
        } else {
            return <span className="iconFooter"><img src={require('../assets/not-connected-icon.png')} hspace="10" />Not Connected</span>;
        }
    }

    batteryStatus(batteryLevel) {
        const isBatteryLow = (batteryLevel < 20);
        if (isBatteryLow) {
            return "lobatt-icon.png";
        } else {
            return "batt-icon.png";
        }
    }
}

export default UserHelper;