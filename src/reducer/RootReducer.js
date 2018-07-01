import {combineReducers} from 'redux';
import FetchExpenses from './FetchExpenseReducer.js'

const rootReducer = combineReducers({
    expenses: FetchExpenses
});

export default rootReducer;