import React, { Component } from 'react';
import { View, ImageBackground, Image, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import bgImage from '../../Images/loginBG.jpg';
import appLogo from '../../Images/appLogo.png';
import LoginContainer from './LoginContainer/LoginContainer'

export default class SignedOut extends Component {
	static navigationOptions = {
		header: null
	}

	constructor() {
		super();
		this.state = {
			loggingIn: false,
		}
	}

	logginInFlip = () => {
		this.setState({ loggingIn: true });
	}

	render() {
		const { navigation } = this.props;

		return (
			<ImageBackground source={bgImage} style={styles.backgroundContainer}>
				<View style={styles.viewContainer}>
					<Image source={appLogo} style={styles.logo} />
					<Text style={styles.logoText}>Telehealth App</Text>

				</View>

				{
					this.state.loggingIn
						? <LoginContainer nav = {navigation}/>
						: <View style={styles.viewContainer}>
							<View style={{ marginBottom: 20 }}>
								<Button large onPress={() => navigation.navigate('AccountCreation')}><Text>Create an Account</Text></Button>
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