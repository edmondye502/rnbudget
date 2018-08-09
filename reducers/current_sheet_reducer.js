import {
	SET_CURRENT_SHEET
} from '../actions/types';


export default function (state = {}, action) {
	switch (action.type) {
		case SET_CURRENT_SHEET:
			return action.payload;
		default:
			return state;
	}
}