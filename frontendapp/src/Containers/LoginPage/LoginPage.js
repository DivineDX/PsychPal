import React, { Component } from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, } from 'react-native';
import bgImage from '../../Images/loginBG.jpg';
import appLogo from '../../Images/appLogo.png';
import InputBox from './InputBox';
import PageButton from './PageButton';

export default class LoginPage extends Component {
	static navigationOptions = {
		header: null
	}

	constructor() {
		super();
		this.state = {
			showPass: false,
			press: false,
		}
	}

	toggleShowPass = () => {
		const curr = this.state.showPass;
		this.setState({ showPass: !curr });
	}

	render() {
		const {navigation} = this.props;
		return (
			<ImageBackground source={bgImage} style={styles.backgroundContainer}>
				<View style={styles.logoContainer}>
					<Image source={appLogo} style={styles.logo} />
					<Text style={styles.logoText}>Telehealth App</Text>
				</View>
				<InputBox placeholderText={'Username'} iconName={'person'} />
				<InputBox
					placeholderText={'Password'}
					iconName={'lock'}
					showPass={this.state.showPass}
					toggle={this.toggleShowPass} />
				<PageButton nav = {navigation} buttonText={'Login'} />
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
		alignItems: 'center',
		marginBottom: 50
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