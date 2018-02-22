import {combineReducers, createStore, applyMiddleware} from 'redux';
import {localeReducer, cssLazyLoader} from "../../../dist";

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
