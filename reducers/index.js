import { combineReducers } from 'redux';

import budgets from './budget_reducer';
import sheets from './sheet_reducer';
import newSheetName from './sheet_form_reducer';

export default combineReducers({
	budgets, sheets, newSheetName
});