import React, {Component} from "react";
import translatable from "./translatable"

export function localeReducer(locales) {
	translatable.prototype.locales = locales;
	console.log(locales);
	return function (state = "en", action) {
		switch (action.type) {
			case "LOCALE_CHANGED":
				return action.locale;
		}

		return state;
	}
}

export default translatable;
