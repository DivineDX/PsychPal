import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { DatePicker, Label } from 'native-base';

const DOBInput = ({ handleChange }) => {
    return (
        <View>
            <Label>Date of Birth</Label>
            <DatePicker
                minimumDate={new Date(1900, 1, 1)}
                maximumDate={new Date()}
                locale={"en"}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"spinner"}
                placeHolderText="Select date"
                textStyle={{ color: "black" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={handleChange}
            />
        </View>

    );
}

const styles = StyleSheet.create({

})

export default DOBInput;