import React, {Component} from "react";
import Translatable from "./translatable";
import cssLazyLoader from "./lazyLoader";

const localeReducer = (initialState = "en", locales) => {
	return function (state = initialState, action) {
		switch (action.type) {
			case "LOCALE_CHANGED":
				return action.time;
		}

		return state;
	}
};

module.exports = {
	translatable: Translatable,
	cssLazyLoader,
	localeReducer
};

