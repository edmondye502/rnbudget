import { combineReducers } from 'redux';

import budgets from './budget_reducer';
import sheets from './sheet_reducer';
import newSheet from './sheet_form_reducer';
import currentSheet from './current_sheet_reducer';

export default combineReducers({
	budgets, sheets, newSheet, currentSheet
});