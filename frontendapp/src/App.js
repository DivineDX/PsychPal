import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import {RootNavigator} from './Router';

const AppContainer = createAppContainer(RootNavigator);

export default class App extends Component {
	render() {
		return (
			<AppContainer/>
		);
	}
}