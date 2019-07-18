import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Item, Input, Label, Text } from 'native-base';

const InputBox = ({title, handleChange, handleBlur, value, touched, errors, secure}) => {
    return (
        <View>
            <Item stackedLabel>
                <Label>{title}</Label>
                <Input onChangeText={handleChange}
                    onBlur={handleBlur}
                    value={value} 
                    secureTextEntry = {secure}
                />
            </Item>

            {touched && errors &&
                <Text style={styles.errorText}>{errors}</Text>
            }
        </View>
    );
}
const styles = StyleSheet.create({
    errorText: {
        fontSize: 12,
        color: 'red',
    },
})
export default InputBox;