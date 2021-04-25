import { ADD_ACCOUNT, FETCH_ACCOUNT, DELETE_ACCOUNT } from "./types";
import axios from "axios";

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
   // window.location.href = "http://localhost:3000";
}

export const deleteAccount = (accountID) => (dispatch) => {

    fetch(`http://localhost:5002/accounts/${accountID}`, {
        method: 'DELETE'
    })
        .then(account => dispatch({
            type: DELETE_ACCOUNT,
            payload: account
        }))
 //   window.location.href = "http://localhost:3000";

}

export const updateAccount = (accountID) => (dispatch) => {

    fetch(`http://localhost:5002/accounts/${accountID}`, {
        method: 'PUT'
    })
        .then(account => dispatch({
            type: DELETE_ACCOUNT,
            payload: account
        }))
    //   window.location.href = "http://localhost:3000";

}