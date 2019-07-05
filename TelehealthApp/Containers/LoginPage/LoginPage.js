import React, { Component } from 'react';
import { View, ImageBackground, Image, StyleSheet, Text,} from 'react-native';

import bgImage from '../../Images/loginBG.jpg';
import appLogo from '../../Images/appLogo.png';
import InputBox from './InputBox';

export default class LoginPage extends Component {
	constructor() {
		super();
		this.state = {
			showPass: true,
			press: false,
		}
	}

	render() {
		return (
			<ImageBackground source={bgImage} style={styles.backgroundContainer}>
				<View style={styles.logoContainer}>
					<Image source={appLogo} style={styles.logo} />
					<Text style={styles.logoText}>Telehealth App</Text>
				</View>
				<View>
					<InputBox placeholderText = {'Username'}/>
					<InputBox placeholderText = {'Password'}/>
				</View>

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
	logoContainer: {
		alignItems: 'center'
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