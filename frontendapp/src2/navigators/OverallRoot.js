import React from 'react';
import {createSwitchNavigator} from "react-navigation";

import SignedOut from '../Containers/CommonUI/SignedOut'
import AccountCreation from '../Containers/CommonUI/AccountCreation'
import patient from './PatientRoot'

//navigator for sign in
export const RootNavigator = createSwitchNavigator(
	{
		SignedOut: SignedOut,
		AccountCreation: AccountCreation,
		patientSignedIn: patient,
		doctorSignedIn: patient
	},
	{
		initialRouteName: 'SignedOut'
	}
);
