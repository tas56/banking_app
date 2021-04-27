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
            return {
                ...state,
                accounts: state.accounts.unshift(action.payload),

            }
        case DELETE_ACCOUNT:
            return {
            ...state,
            accounts: action.payload
        }
        case UPDATE_ACCOUNT:
            return {
                ...state,
                accounts: action.payload
            }
        default:
            return state;
    }
}