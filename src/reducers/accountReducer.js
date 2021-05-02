import { ADD_ACCOUNT, FETCH_ACCOUNT, DELETE_ACCOUNT, UPDATE_ACCOUNT } from "../actions/types";

const DEFAULT_STATE = {
    accounts: [],
    transactions: []
}

export default function (state = DEFAULT_STATE, action) {

    switch(action.type){
        case FETCH_ACCOUNT:
            return {
                ...state,
                accounts: action.payload
            }
        case ADD_ACCOUNT:
            const addAccounts = state.accounts.map( account => {
                return (account.id !== action.payload.id) ? account : action.payload;
            })
            return {
                ...state,
                addAccounts

            }
        case DELETE_ACCOUNT:
            return {
            ...state,
            accounts: action.payload
        }
        case UPDATE_ACCOUNT:
            const updateAccounts = state.accounts.map( account => {
                return (account.id !== action.payload.id) ? account : action.payload;
            })
            return {
                ...state,
                updateAccounts
            }
        default:
            return state;
    }
}