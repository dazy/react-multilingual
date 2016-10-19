import React, {Component} from "react";
import {connect} from 'react-redux';
import {translatable} from "../../../../dist";

@connect(({counter}) => ({counter}))
@translatable(({hello}) => ({hello}))
export default class DashboardContainer extends Component {
	render() {
		let {hello, changeLocale} = this.props;

		return (
			<div>
				<button onClick={() => changeLocale("en")}>en</button>
				<button onClick={() => changeLocale("fa")}>fa</button>
				<p>
					{hello}
				</p>
			</div>
		);
	}
}
