import {
	SHEET_FORM_UPDATE,
	SHEET_FORM_CLEAR,
	SHEET_FORM_ERROR
} from '../actions/types';

const INITIAL_STATE = {
	sheetName: '',
	error: ''
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case SHEET_FORM_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case SHEET_FORM_CLEAR:
			return INITIAL_STATE;
		case SHEET_FORM_ERROR:
			return { ...state, error: 'Invalid Sheet Name' };
		default:
			return state;
	}
}