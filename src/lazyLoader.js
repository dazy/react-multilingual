let loaderInterval;
let node = null;
let intervalCounter = 0;
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

	loaderInterval = setInterval(() => {
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
	let styles = document.querySelectorAll("link[data-style='clickyab']");
	for (let i = 0; i < styles.length - 1; i++) {
		styles[i].remove();
	}
}


function cssLazyLoader(actionTypes = [], loaders = {}) {
	node = insertNode();

	return store => next => action => {
		if (action.type == "LOCALE_CHANGED") {
			let css = loaders[action.locale];
			loadCss(css.address);

			checkCssLoader(css.direction);
		}

		return next(action)
	};
}

export default cssLazyLoader;
