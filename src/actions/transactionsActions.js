import { FETCH_TRANSACTIONS } from "./types";

export const fetchTransactions = () => (dispatch) => {
    fetch('http://localhost:5002/transactions')
        .then(res => res.json())
        .then(transactions => dispatch({
            type: FETCH_TRANSACTIONS,
            payload: transactions
        }))

}
//
// export const addAccount = (account) => (dispatch) => {
//     fetch('http://localhost:5002/accounts', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(account)
//     }).then(account => dispatch({
//         type: ADD_ACCOUNT,
//         payload: account
//     }))
//         .then(window.location.href = "http://localhost:3000");
// }