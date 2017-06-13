#React Multi-Lingual

This package can handle strings and css files and workes on top of redux. 
I used react-redux connect function codebase

###Installation
```s
npm i -S react-multilingual
```

A glimpse on how you handle your stuff would be easy as this. 
for better clarifications see example folder and run it by
```js
npm install && npm run example
```

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
Note that this could be a nested object and as deep as you want, to hold all strings and translations.

###store.js
Note that "en.css" and "fa.css" should be accessible from public html file (they will be injected at run-time). 
In this example they are located at 'example/public' directory.
```js
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {localeReducer, cssLazyLoader} from "react-multilingual";

export const store = createStore(combineReducers({
	locale: localeReducer("en", require("../../locales/index").default)
}), 
	applyMiddleware(
		cssLazyLoader(["LOCALE_CHANGED"], {
			"en": {address: "en.css", direction: "ltr"},
			"fa": {address: "fa.css", direction: "rtl"}
		}),
	)
);
```

###DashboardContainer.jsx
```js
import React, {Component} from "react";
import {translatable} from "react-multilingual";

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
Which could be written like this too:
```js
import React, {Component} from "react";
import {translatable} from "react-multilingual";

class DashboardContainer extends Component {
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

const mapTranslationsToProps = ({hello}) => ({hello});

export default translatable(mapTranslationsToProps)(DashboardContainer);
```

###MIT licence
  
