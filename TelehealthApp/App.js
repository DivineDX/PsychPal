import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import LoginPage from './Containers/LoginPage/LoginPage';

const App = () => {
	return (
		<LoginPage />
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
});

export default App;
