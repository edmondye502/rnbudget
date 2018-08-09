import {
	SHEET_ADD,
	SHEET_DELETE
} from '../actions/types';


export default function (state = [], action) {
	switch (action.type) {
		case SHEET_ADD:
			return [action.payload, ...state];
		case SHEET_DELETE:
			var removeIndex = state.findIndex(function(s) {
				return s.id === action.payload.id;
			});
			state.splice(removeIndex, 1);
			return state;
		default:
			return state;
	}
}