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
export default class DownloadDoctorDoc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      url : " "
     }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  renderWebView() {
      return (
        <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.Modal}>
              <TouchableOpacity
                style = {styles.backButton}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
              <Text style = {{fontSize:20}}>Back to app</Text>
              </TouchableOpacity>
              <WebView
                source = {{uri: this.state.url}}
              />
            </View>
        </Modal>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
            this.setState({
              url : "http://" + connection.connection + ":80/download/doctors-records/" + this.props.name,
            })
          }}
          style= {styles.EnterButton}
          >
          <Text>see document</Text>
        </TouchableOpacity>
        </View>
      )
    }

  render() {
    return (
      <View style={{flex:1}}>
       {this.renderWebView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  EnterButton: {
    margin: 20,
    height: 500,
    fontSize: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    color: 'black'
  },
  backButton: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: "#00bfff"
  },
  Modal: {
    position: 'absolute',
    flex: 2,
    bottom: 0,
    left: 0,
    right: 0,
    top: 50,
  },
})
