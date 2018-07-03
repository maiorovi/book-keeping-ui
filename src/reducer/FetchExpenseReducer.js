import {FETCH_EXPENSES} from '../action/actions.js'

export default function fetchExpenses(state = [], action) {
    console.log(action);
    switch (action.type) {
        case FETCH_EXPENSES:
            return [...action.payload.expenses];
    }

    return state;
}