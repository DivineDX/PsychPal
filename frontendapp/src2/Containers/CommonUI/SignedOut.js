import React, { Component } from 'react';
import { View, ImageBackground, Image, StyleSheet, AsyncStorage } from 'react-native';
import { Button, Text } from 'native-base';
import bgImage from '../../Images/loginBG.jpg';
import appLogo from '../../Images/appLogo.png';
import LoginContainer from './LoginContainer/LoginContainer';

export default class SignedOut extends Component {
	static navigationOptions = {
		header: null
	}

	constructor(props) {
		super(props);
		this.state = {
			loggingIn: false,
			doctors: [],
			patients: []
		}
	}

	logginInFlip = () => {
		this.setState({ loggingIn: true });
	}

	async fetchdata() {
		if (await AsyncStorage.getItem('password') != null && await AsyncStorage.getItem('username') != null) {
			this.logginInFlip();
		}
	}

	async componentDidMount() {
        fetch('http://localhost:3005/select * from doctors;')
        .then(response => response.json())
        .then(data => {
			const doctorData = data 
            this.setState({
                doctors: doctorData
			})
        })
        fetch('http://localhost:3005/select * from patients;')
        .then(response => response.json())
        .then(data => { 
			const patientData = data
            this.setState({
                patients: patientData
            })
        })
    }


	render() {
		const { navigation } = this.props;
		this.fetchdata();
		return (
			<ImageBackground source={bgImage} style={styles.backgroundContainer}>
				<View style={styles.viewContainer}>
					<Image source={appLogo} style={styles.logo} />
					<Text style={styles.logoText}>Telehealth App</Text>

				</View>

				{
					this.state.loggingIn
						? <LoginContainer nav = {navigation}
								patients = {this.state.patients}
								doctors = {this.state.doctors}
							/>
						: <View style={styles.viewContainer}>
							<View style={{ marginBottom: 20 }}>
								<Button large onPress={() => navigation.navigate('AccountCreation', {
									doctors: this.state.doctors,
									patients: this.state.patients
								})}><Text>Create an Account</Text></Button>
							</View>
							<Text>
								Already have an account? <Text onPress={() => this.logginInFlip()}
									style={{ color: 'blue' }}>Sign in</Text>
							</Text>
						</View>
				}

			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	backgroundContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	viewContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30
	},
	logo: {
		width: 120,
		height: 120,
	},
	logoText: {
		color: 'white',
		fontSize: 20,
		fontWeight: '500',
		marginTop: 10,
		opacity: 0.5
	},
})
