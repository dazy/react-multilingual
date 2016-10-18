import {COUNT} from "./../actions/actionTypes"

export function counterReducer(state = 0, action) {
	switch (action.type) {
		case COUNT:
			return state + 1
	}

	return state;
}
