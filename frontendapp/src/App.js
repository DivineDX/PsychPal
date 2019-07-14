import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import RootStack from './RootStack';

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
	render() {
		return (
			<AppContainer/>
		);
	}
}