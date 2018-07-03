import axios from 'axios';

export const FETCH_EXPENSES = 'FETCH_EXPENSES';
const BASE_URL = `https://3f0d6b85-aeeb-46a7-9f62-47e974cb992a.mock.pstmn.io`;

export function fetchExpenses() {
    const response = axios.get(`${BASE_URL}/expenses`);

    return (dispatch) => {
        response.then(({data}) => {
            dispatch({type: FETCH_EXPENSES, payload: {expenses : data.expenses}})
        })}
}