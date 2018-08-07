
import {
	BUDGET_ADD,
	BUDGET_FORM_UPDATE,
	BUDGET_FORM_CLEAR
} from './types';


export const budgetAdd = (budget) => {
	return {
		payload: budget,
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