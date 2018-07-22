import axios from 'axios';

export const FETCH_EXPENSES = 'FETCH_EXPENSES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
// const BASE_URL = `https://3f0d6b85-aeeb-46a7-9f62-47e974cb992a.mock.pstmn.io`;
const BASE_URL = `http://localhost:3001`;

export function fetchExpenses() {
    const response = axios.get(`${BASE_URL}/expenses`);

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