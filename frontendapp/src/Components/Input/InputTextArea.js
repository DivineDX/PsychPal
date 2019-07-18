import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Item, Textarea, Label, Text } from 'native-base';

const InputTextArea = ({ title, handleChange, handleBlur, value, touched, errors }) => {
    return (
        <View style = {styles.container}>
            <Label>{title}</Label>
            <Textarea
                rowSpan={5} bordered placeholder="I am a..."
                onChangeText={handleChange}
                onBlur={handleBlur}
                value={value}
            />
            {touched && errors &&
                <Text style={styles.errorText}>{errors}</Text>
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    errorText: {
        fontSize: 12,
        color: 'red',
    },
})

export default InputTextArea;