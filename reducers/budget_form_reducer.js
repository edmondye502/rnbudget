import {
	BUDGET_FORM_UPDATE,
	BUDGET_FORM_CLEAR
} from '../actions/types';

const INITIAL_STATE = {
	budgetDesc: '',
	budgetPrice: ''
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case BUDGET_FORM_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case BUDGET_FORM_CLEAR:
			return INITIAL_STATE;
		default:
			return state;
	}
}