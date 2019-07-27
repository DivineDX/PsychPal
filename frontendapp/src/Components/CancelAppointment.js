import React, { Component } from 'react';
import { View, StyleSheet, Modal } from 'react-native'
import { Button, Text } from 'react-native-elements';
import { Textarea } from "native-base";
import connection from '../../DatabaseInteraction/Connection'

const test_appointment = {
	'appointment_date_time': '2019-07-25 16:30:00',
	'cancel': 0, // by default 0 - ie. cancel == false
	'cancel_reason': '' // by default this will be blank
}

// Attn CJ: Data required here is the appointment object
export default class CancelAppointment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			appointment: test_appointment,
			input_reason: '',
			modalVisible: false,
		}
	}

	receive_reason = (text) => {
		this.setState({
			input_reason: text
		})
	}

	cancel_appointment = () => {
		this.setModalVisible(!this.state.modalVisible);
		const appointment = this.props.appointment;
		const jitsy = appointment.jitsy_key;

		const url = 'http://' + connection.connection + ":3005/update appointment_details set " +
			"cancel = 1, cancel_reason = \'" + this.state.input_reason + "\'" +
			"where jitsy_key = \'" + jitsy + "\';"

		fetch(url)
		// then(() => {
		// 	RNRestart.Restart();
		// 	return true;
		// }
		// )
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	componentDidMount() {
		// for CJ
	}

	render() {
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
						<Text h4>Cancel Appointment</Text>
						<Textarea
							style={styles.textboxContainer}
							rowSpan={5}
							bordered
							placeholder="Reason for cancellation"
							onChangeText={this.receive_reason} />
						{/* Set cancel = 1 and fill in cancel_reason for that appointment object */}
						{/* Once edit already navigate back to planner more details */}
						<Button
							title="Confirm Cancellation"
							onPress={this.cancel_appointment} />
						<Button
							title="Go back"
							onPress={() => {
								this.setModalVisible(false);
							}} />
					</View>
				</Modal>
				<Button
					containerStyle={styles.buttonContainer}
					title='Cancel Appointment'
					onPress={() => { this.setModalVisible(true); }}
				/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	textboxContainer: {
		marginHorizontal: 20,
	},
	buttonContainer: {
		width: 275,
		marginHorizontal: 75
	},
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
	}
})


/*
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
*/