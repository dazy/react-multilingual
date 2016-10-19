import React, {Component} from "react";
import Translatable from "./translatable";
import cssLazyLoader from "./lazyLoader";

const localeReducer = locales => {
	Translatable.prototype.locales = locales;

	return function (state = "en", action) {
		switch (action.type) {
			case "LOCALE_CHANGED":
				return action.locale;
		}

		return state;
	}
};

module.exports = {
	translatable: Translatable,
	cssLazyLoader,
	localeReducer
};

