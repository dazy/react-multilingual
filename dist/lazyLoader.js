'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
function loadCss(filename) {
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = filename;
	var head = document.getElementsByTagName('head')[0];
	head.parentNode.insertBefore(link, head);
}

var cssLazyLoader = exports.cssLazyLoader = function cssLazyLoader() {
	var actionTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var loaders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


	return function (store) {
		return function (next) {
			return function (action) {
				if (action.type == "LOCALE_CHANGED") {
					var cssAddress = loaders[action.locale];
					loadCss(cssAddress);
				}

				return next(action);
			};
		};
	};
};