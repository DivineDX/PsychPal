import React from 'react';
import { TextInput, StyleSheet, Dimensions} from 'react-native';

const InputBox = ({placeholderText}) => {
    return (
        <TextInput
            style={styles.inputBox}
            placeholder={placeholderText}
            placeholderTextColor={'rbga(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
        />
    );
}
const {width: WIDTH } = Dimensions.get('window');
const styles = StyleSheet.create({
	inputBox: {
		width: WIDTH - 55,
		height: 45,
		borderRadius: 25,
		paddingLeft: 45,
		backgroundColor: 'rgba(0, 0, 0, 0.35)',
		color: 'rgba(255, 255, 255, 0.7)',
		marginHorizontal: 25
	},
})
export default InputBox;