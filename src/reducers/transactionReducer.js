import { FETCH_TRANSACTIONS, ADD_TRANSACTION, ADD_ACCOUNT } from "../actions/types";

const DEFAULT_STATE = {
    transactions: [],
}

export default function (state = DEFAULT_STATE, action) {

    switch(action.type){
        case FETCH_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload
            }
        case ADD_ACCOUNT:
            return {
                ...state,
                transactions: state.transactions.unshift(action.payload)
            }
        default:
            return state;
    }
}