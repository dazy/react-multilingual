import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {counterReducer} from './reducers/counterReducer';
import createLogger from 'redux-logger';
import {localeReducer, cssLazyLoader} from "../../../dist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers({
	counter: counterReducer,
	locale: localeReducer("en", require("../../locales/index").default)
}), composeEnhancers(
	applyMiddleware(
		// createLogger()
		cssLazyLoader(["LOCALE_CHANGED"], {
			"en": {address: "en.css", direction: "ltr"},
			"fa": {address: "fa.css", direction: "rtl"}
		}),
	)
));
