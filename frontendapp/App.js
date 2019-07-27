import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import DownloadDoctorDoc from './DatabaseInteraction/IBMCOS/DownloadDoctorDoc';
import ProfilePic from './DatabaseInteraction/IBMCOS/ProfilePic';
import {pullPatientData} from './DatabaseInteraction/MYSQL/pullingdata';
import GetDataFromServer from './Apps';
var data = null;
export default class App extends Component {
    componentDidMount() {
        data = pullPatientData();
        console.log(data);
    }
    render() {
        return (
            <View style = {styles.EnterButton}>
                <Text>{data}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    EnterButton: {
        marginTop: 320,
        paddingHorizontal: 100,
        color: 'black'
    }
})