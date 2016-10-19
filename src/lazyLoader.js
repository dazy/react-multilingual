function loadCss(filename) {
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = filename;
	var head = document.getElementsByTagName('head')[0];
	head.parentNode.insertBefore(link, head);
}

function cssLazyLoader(actionTypes = [], loaders = {}) {

	return store => next => action => {
		if (action.type == "LOCALE_CHANGED") {
			let cssAddress = loaders[action.locale];
			loadCss(cssAddress);
		}

		return next(action)
	};
}

export default cssLazyLoader;
