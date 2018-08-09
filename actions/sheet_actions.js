
import {
	SHEET_ADD,
	SET_CURRENT_SHEET,
	SHEET_FORM_UPDATE,
	SHEET_FORM_CLEAR,
	SHEET_FORM_ERROR,
	SHEET_DELETE
} from './types';


export const sheetAdd = (sheet, callback) => {
	if(!sheet.name){
		return {
			type: SHEET_FORM_ERROR
		};
	}
	return (dispatch) => {
		dispatch({ payload: sheet, type: SHEET_ADD });
		callback();
	};
};

export const setCurrentSheet = (sheet) => {
	return {
		payload: sheet,
		type: SET_CURRENT_SHEET
	};
};

export const sheetFormUpdate = ({prop, value}) => {
	return {
		payload: { prop, value },
		type: SHEET_FORM_UPDATE
	};
};

export const sheetFormClear = () => {
	return { type: SHEET_FORM_CLEAR };
};

export const sheetDelete = (sheet) => {
	return {
		payload: sheet,
		type: SHEET_DELETE
	};
};