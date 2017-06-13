"use strict";

var _translatable = require("./translatable");

var _translatable2 = _interopRequireDefault(_translatable);

var _lazyLoader = require("./lazyLoader");

var _lazyLoader2 = _interopRequireDefault(_lazyLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import React, {Component} from "react";
var localeReducer = function localeReducer() {
	var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "en";
	var locales = arguments[1];

	_translatable2.default.prototype.locales = locales;

	return function () {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
		var action = arguments[1];

		switch (action.type) {
			case "LOCALE_CHANGED":
				return action.locale;
		}

		return state;
	};
};

module.exports = {
	translatable: _translatable2.default,
	cssLazyLoader: _lazyLoader2.default,
	localeReducer: localeReducer
};