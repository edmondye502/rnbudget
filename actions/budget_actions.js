
import {
	BUDGET_ADD,
	BUDGET_FORM_UPDATE,
	BUDGET_FORM_CLEAR,
	BUDGET_DELETE,
	BUDGET_CLEAR_AFTER_SHEET_DELETE
} from './types';


export const budgetAdd = (sheet, budget) => {
	return {
		payload: { sheet, budget },
		type: BUDGET_ADD
	};
};

export const budgetFormUpdate = ({prop, value}) => {
	return {
		payload: { prop, value },
		type: BUDGET_FORM_UPDATE
	};
};

export const budgetClear = () => {
	return { type: BUDGET_FORM_CLEAR };
};

export const budgetDelete = (sheet, budget) => {
	return {
		payload: { sheet, budget },
		type: BUDGET_DELETE
	};
};

export const budgetClearAfterSheetDelete = (sheet) => {
	return {
		payload: sheet,
		type: BUDGET_CLEAR_AFTER_SHEET_DELETE
	};
};