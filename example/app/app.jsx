import {store} from "./redux/store";
import {Provider} from "react-redux";
import React from 'react';
import DashboardContainer from "./containers/dashboard/DashboardContainer";

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<DashboardContainer/>
			</Provider>
		)
	}
}
