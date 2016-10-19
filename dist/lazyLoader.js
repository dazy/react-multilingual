'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var loaderInterval = void 0;
var node = null;
var intervalCounter = 0;
function loadCss(filename) {
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = filename;
	link.setAttribute("data-style", "clickyab");
	document.head.appendChild(link);
}

function insertNode() {
	var div = document.createElement('div');
	div.id = "clickyab_rtl_ltr_node";
	document.body.appendChild(div);

	return div;
}

function checkCssLoader(direction) {
	clearInterval(loaderInterval);

	loaderInterval = setInterval(function () {
		if (getComputedStyle(node, null).getPropertyValue("direction") === direction) {
			clearInterval(loaderInterval);
			terminateOlderCss();
		}

		// for slow internet connection
		++intervalCounter;
		if (intervalCounter == 40) {
			clearInterval(loaderInterval);
			terminateOlderCss();
		}
	}, 200);
}

function terminateOlderCss() {
	var styles = document.querySelectorAll("link[data-style='clickyab']");
	for (var i = 0; i < styles.length - 1; i++) {
		styles[i].remove();
	}
}

function cssLazyLoader() {
	var actionTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var loaders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	node = insertNode();

	return function (store) {
		return function (next) {
			return function (action) {
				if (action.type == "LOCALE_CHANGED") {
					var css = loaders[action.locale];
					loadCss(css.address);

					checkCssLoader(css.direction);
				}

				return next(action);
			};
		};
	};
}

exports.default = cssLazyLoader;