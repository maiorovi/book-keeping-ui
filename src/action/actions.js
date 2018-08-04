import axios from 'axios';

export const FETCH_EXPENSES = 'FETCH_EXPENSES';
export const ADD_EXPENSE = 'ADD_EXPENSE';

const BASE_URL = `https://9067yy8sdl.execute-api.eu-central-1.amazonaws.com/teststage`;

export function fetchExpenses(fromDate, toDate) {
    const response = axios.get(`${BASE_URL}/expenses?from=${fromDate}&to=${toDate}`);

    return (dispatch) => {
        response.then(({data}) => {
            dispatch({type: FETCH_EXPENSES, payload: {expenses : data.expenses}})
        })}
}

export function addExpense(values, callback) {
    console.log(values);
    const req = axios.post(`${BASE_URL}/expenses`, values)
        .then(data => callback());

    return {
                type: ADD_EXPENSE,
                payload: req
    };
}