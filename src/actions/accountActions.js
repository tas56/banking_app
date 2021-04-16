import { ADD_ACCOUNT, FETCH_ACCOUNT } from "./types";

export const fetchAccounts = () => (dispatch) => {
    fetch('http://localhost:5002/accounts')
        .then(res => res.json())
        .then(accounts => dispatch({
            type: FETCH_ACCOUNT,
            payload: accounts
        }))

}