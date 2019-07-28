import React, { Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Modal
} from 'react-native';
import {WebView} from "react-native-webview";
import connection from '../Connection';

//to use, add this class as a component
//pass in props called "name" to search for doctor name ref details
export default class UploadPic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      url : "http://" + connection.connection + ":80/upload/profile-pic/" + this.props.navigation.state.params.user.name
     }
  }

  updateURL() {
    let userType = null
    if (this.props.navigation.state.params.user.user_type = 'patient') {
        userType = 'patients'
    } else {
        userType = 'doctors'
    }
    //const profile_pic_url = 'http://' + connection.connection + ':80/download/profile-pic/' + this.props.navigation.state.params.user.name
    const profile_pic_url = "sss"
    let url = 'http://' + connection.connection + ":3005/update " + userType + ' set ' + 
    "profile_pic_url = \'" + 'alex' + connection.connection + ":80/download/profile-pic/" + this.props.navigation.state.params.user.name + 
    "\' where name = \'" + this.props.navigation.state.params.user.name + "\';" 
    fetch(url)
    .then(response => response.json())
    .then(data => console.log("url updated"))
  }
  render() {
    this.updateURL()
    return (
      <View style={{flex:1}}>
        <WebView
        source = {{uri: this.state.url}}
        />
      </View>
    );
  }
}
