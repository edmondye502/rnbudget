
import {
	BUDGET_ADD
} from './types';


export const addBudget = (budget) => {
	return {
		payload: budget,
		type: BUDGET_ADD
	};
};