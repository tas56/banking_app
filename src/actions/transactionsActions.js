import { FETCH_TRANSACTIONS, UPDATE_ACCOUNT, ADD_TRANSACTION } from "./types";

export const fetchTransactions = () => (dispatch) => {
    fetch('http://localhost:5002/transactions')
        .then(res => res.json())
        .then(transactions => dispatch({
            type: FETCH_TRANSACTIONS,
            payload: transactions
        }))

}

export const addTransaction = (transaction) => (dispatch) => {
    fetch('http://localhost:5002/transactions', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(transaction)
    }).then(response => dispatch({
        type: UPDATE_ACCOUNT,
        payload: transaction,
        response
    }))
}