import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {counterReducer} from './reducers/counterReducer';
import createLogger from 'redux-logger';
import {localeReducer} from "../../../dist";
import cssLazyLoader from "../../../dist/lazyLoader";

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
