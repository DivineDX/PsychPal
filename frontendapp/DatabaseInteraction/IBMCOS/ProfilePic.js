import React, { Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import connection from '../Connection';

export default class ProfilePic extends Component {
    render() {
        return(
            <View style = {styles.image}>
                <Image
                    style={{width: 50, height: 50}}
                    source = {{uri: "http://" + connection.connection + ":80/download/profile-pic/" + this.props.name}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0dcdc',
        width: 200,
        height: 200, 
        borderRadius: 200 / 2,
        borderColor: 'black'
    }
})