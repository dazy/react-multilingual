import React, {Component} from "react";
import Translatable from "./translatable";

export const localeReducer = locales => {
	Translatable.prototype.locales = locales;

	return function (state = "en", action) {
		switch (action.type) {
			case "LOCALE_CHANGED":
				return action.locale;
		}

		return state;
	}
};

export default Translatable;

