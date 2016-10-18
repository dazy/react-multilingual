#React Multi-Lingual

this package can handle strings and css files and based on redux. 
I used react-redux connect function codebase

###Installation
```s
npm i -S react-multiselect
```

a glimpse on how you handle your stuff would be easy as this. 
for better clarifications see example folder 
###locale.js
```js
export default {
	fa: {
		hello: "سلام"
	},
	en: {
		hello: "hello"
	}
}
```

###store.js
```js
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {counterReducer} from './reducers/counterReducer';
import createLogger from 'redux-logger';
import {localeReducer} from "../../../dist";
import {cssLazyLoader} from "../../../dist/lazyLoader";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(combineReducers({
	counter: counterReducer,
	locale: localeReducer(require("../../locales/index").default)
}), composeEnhancers(
	applyMiddleware(
		// createLogger()
		cssLazyLoader(["LOCALE_CHANGED"], {
			"en": "en.css",
			"fa": "fa.css"
		}),
	)
));
```

###DashboardContainer.jsx
```js
import React, {Component} from "react";
import {connect} from 'react-redux';
import translatable from "../../../../dist";

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
```


###MIT licence
  
