
import {
	SHEET_ADD,
	SET_CURRENT_SHEET,
	SHEET_FORM_UPDATE
} from './types';


export const sheetAdd = (sheet, callback) => {
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