import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from "react-native-webview";
import connection from '../Connection';

//to use, add this class as a component
//pass in props called "name" to search for doctor name ref details
export default class UploadPic extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalVisible: false,
			url: "http://" + connection.connection + ":80/upload/profile-pic/" + this.props.navigation.state.params.user.name + ".jpg"
		}
	}

	updateURL = () => {
		let userType = null
		if (this.props.navigation.state.params.user.user_type = 'patient') {
			userType = 'patients'
		} else {
			userType = 'doctors'
		}
		const google = "www.google.com" // for testing
		// download link should not be used
		//const download_profile_pic = 'http://' + connection.connection + ':80/download/profile-pic/' + this.props.navigation.state.params.user.name
		const working_url = "http://" + connection.connection + ":3005/update%20patients%20set%20profile_pic_url=%22" + google + "%22%20where%20name=%22" + this.props.navigation.state.params.user.name + "%22;"
		const url_dont_use = 'http://' + connection.connection + ":3005/update " + userType + ' set ' +
			"profile_pic_url = \'" + 'alex' + connection.connection + ":80/download/profile-pic/" + this.props.navigation.state.params.user.name +
			"\' where name = \'" + this.props.navigation.state.params.user.name + "\';"
		fetch(working_url)
	}
	render() {
		alert(this.props.navigation.state.params.user.name)
		this.updateURL()
		return (
			<View style={{ flex: 1 }}>
				<WebView
					source={{ uri: this.state.url }}
				/>
			</View>
		);
	}
}
