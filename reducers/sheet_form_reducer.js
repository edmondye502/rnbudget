import {
	SHEET_FORM_UPDATE,
	SHEET_FORM_CLEAR
} from '../actions/types';

const INITIAL_STATE = {
	sheetName: '',
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case SHEET_FORM_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case SHEET_FORM_CLEAR:
			return INITIAL_STATE;
		default:
			return state;
	}
}