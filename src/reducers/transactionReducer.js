import { FETCH_TRANSACTIONS, WITHDRAWAL } from "../actions/types";

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
        case WITHDRAWAL:
            return {
                ...state,
                transactions: action.payload
            }
        default:
            return state;
    }
}