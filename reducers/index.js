import { combineReducers } from 'redux';

import budgets from './budget_reducer';
import sheets from './sheet_reducer';

export default combineReducers({
	budgets, sheets
});