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
		SignedIn: patient,
	},
	{
		initialRouteName: 'SignedOut'
	}
);

//To be done later if need arises


/*

const SearchStack = createStackNavigator(
	{
		Main: Search,
	},
	{
		initialRouteName: 'Main'
	}
);

const TreatmentStack = createStackNavigator(
	{
		Main: TreatmentPatient,
	},
	{
		initialRouteName: 'Main'
	}
); */

