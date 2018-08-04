import {FETCH_EXPENSES} from '../action/actions.js'
import {DELETE_EXPENSES} from '../action/actions.js'

export default function fetchExpenses(state = [], action) {
    console.log(action);
    switch (action.type) {
        case FETCH_EXPENSES:
            return [...action.payload.expenses];
        case DELETE_EXPENSES:
            return state.filter(exp => exp._id !== action.id);
    }

    console.log(state);
    return state;
}