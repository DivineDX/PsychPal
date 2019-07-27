import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import {RootNavigator} from './navigators/OverallRoot';

const AppContainer = createAppContainer(RootNavigator);

export default class App extends Component {
	render() {
		return (
			<AppContainer/>
		);
	}
}