import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from "react-native-webview";
import connection from '../Connection';

export default class UploadPic extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalVisible: false,
			url: "http://" + connection.connection + ":80/upload/profile-pic/" + this.props.navigation.state.params.user.name + "profilepic.jpg"
		}
	}

	render() {
		
		return (
			<View style={{ flex: 1 }}>
				<WebView
					source={{ uri: this.state.url }} />
			</View>
		);
	}
}
