import React, { Component } from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import AccountSettings from '../Containers/CommonUI/AccountSettings/AccountSettings';
import ChangePassword from '../Components/ChangePassword';
import uploadProfilePic from '../../DatabaseInteraction/IBMCOS/UploadPic';


//switch navigator for both account settings page
const OverallAccountSettingsTab = createAppContainer(createStackNavigator(
    {
        AccountSettings: AccountSettings,
        ChangePassword: ChangePassword,
        uploadProfilePic: uploadProfilePic
        
	},
	{
		initialRouteName: 'AccountSettings',
    }
))
 
export default class OverallAccountSettings extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<OverallAccountSettingsTab 
			style = {{margin: 20}}
			screenProps={{
                userName: this.props.screenProps.userName,
                userType: this.props.screenProps.userType
			}} />
		)
	}
}

