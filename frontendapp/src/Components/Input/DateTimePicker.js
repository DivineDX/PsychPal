import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
 
export default class DateTimePickerTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false
    };
  }
 
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };
 
  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };
 
  handleDatePicked = date => {
    this.hideDateTimePicker();
  };
 
  render() {
    return (
      <View>
        <Button 
            buttonStyle={styles.buttonContainer}
            title="Choose date and time" 
            onPress={this.showDateTimePicker} />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode='datetime'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	buttonContainer: {
		marginHorizontal: 1,
		marginBottom: 50,
	}
})  