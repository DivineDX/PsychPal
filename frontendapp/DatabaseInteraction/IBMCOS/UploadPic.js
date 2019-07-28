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

	// not used anymore
	updateURL = () => {
		let userType = null
		if (this.props.navigation.state.params.user.user_type = 'patient') {
			userType = 'patients'
		} else {
			userType = 'doctors'
		}
		
		// This used to be the sql code to update sql column for img url. We do not need this anymore.
		/*const download_profile_pic = 'http://' + connection.connection + ':80/download/profile-pic/' + "beckham" + ".jpg"
		const test = 'hello'
		//const test_url = "http://" + connection.connection + ":3005/update%20patients%20set%20profile_pic_url=%22" + google + "%22%20where%20name=%22" + this.props.navigation.state.params.user.name + "%22;"
		const set_url = 'http://' + connection.connection + ":3005/update " + userType + ' set ' +
			"profile_pic_url = \'" + 'http://' + connection.connection + ":80/download/profile-pic/" + this.props.navigation.state.params.user.name + ".jpg"
			+ "\' where name = \'" + this.props.navigation.state.params.user.name + "\';"
		const the_url = "http://" + connection.connection + ":3005/update%20" + userType + "%20set%20profile_pic_url=%22" + tiny + "%22%20where%20name=%22" + this.props.navigation.state.params.user.name + "%22;"
		fetch(the_url)*/
	}
	render() {
		
		/*this.updateURL()*/
		return (
			<View style={{ flex: 1 }}>
				<WebView
					source={{ uri: this.state.url }}
				/>
			</View>
		);
	}
}
