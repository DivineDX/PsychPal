import React from 'react';
import { StyleSheet, View, } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { Label, Text } from 'native-base';

const PickerCountry = ({ handleChange, value }) => {
	return (
		<View style={styles.container}>
			<Label>Select your country</Label>
			<CountryPicker
				onChange={value => handleChange(value.cca2)}
				cca2={value}
				translation="eng"
				filterable
				showCountryNameWithFlag
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-start',
	},
})

export default PickerCountry;