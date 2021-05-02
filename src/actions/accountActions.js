import { ADD_ACCOUNT, FETCH_ACCOUNT, DELETE_ACCOUNT, UPDATE_ACCOUNT } from "./types";

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
    }).then(response => dispatch({
        type: ADD_ACCOUNT,
        payload: account,
        response
    }))

}

export const deleteAccount = (accounts, accountID) => (dispatch) => {

    fetch(`http://localhost:5002/accounts/${accountID}`, {
        method: 'DELETE'
    })
        .then(response => dispatch({
            type: DELETE_ACCOUNT,
            payload: accounts,
            response
        }))

}

export const updateAccount = (account) => (dispatch) => {

    fetch(`http://localhost:5002/accounts/${account.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(account)
    })
        .then(response => dispatch({
            type: UPDATE_ACCOUNT,
            payload: account,
            response
        }))

}