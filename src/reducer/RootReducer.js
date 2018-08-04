import {combineReducers} from 'redux';
import FetchExpenses from './ExpenseReducer.js'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    expenses: FetchExpenses,
    form: formReducer
});

export default rootReducer;