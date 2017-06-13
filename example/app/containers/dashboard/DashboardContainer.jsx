import React, {Component} from "react";
import {translatable} from "../../../../dist";

@translatable(({hello}) => ({hello}))
export default class DashboardContainer extends Component {
	render() {
		let {hello, changeLocale} = this.props;

		return (
			<div>
				<button onClick={() => changeLocale("en")}>en</button>
				<button onClick={() => changeLocale("fa")}>fa</button>
				<br />
				<p>
					{hello}
				</p>
			</div>
		);
	}
}
