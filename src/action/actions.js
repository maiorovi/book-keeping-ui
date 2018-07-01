import axios from 'axios';

export const FETCH_EXPENSES = 'FETCH_EXPENSES';

export function fetchExpenses() {

    return {
        type: FETCH_EXPENSES,
        payload: {expenses: [
                {"id": 123, "description" : "spent on market", "value": 1400, "currency": "UAH"}
            ]}
    };
}