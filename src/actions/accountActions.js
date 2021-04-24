import { ADD_ACCOUNT, FETCH_ACCOUNT } from "./types";

export const fetchAccounts = () => (dispatch) => {
    fetch('http://localhost:5002/accounts')
        .then(res => res.json())
        .then(accounts => dispatch({
            type: FETCH_ACCOUNT,
            payload: accounts
        }))

}

export const addAccount = (account) => (dispatch) => {
    fetch('http://localhost:5002/accounts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(account)
    }).then(account => dispatch({
        type: ADD_ACCOUNT,
        payload: account
    }))
        .then(window.location.href = "http://localhost:3000");
}