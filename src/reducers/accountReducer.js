import { ADD_ACCOUNT, FETCH_ACCOUNT } from "../actions/types";

const DEFAULT_STATE = {
    accounts: [],
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
                accounts: state.accounts.push(action.payload)
            }
        default:
            return state;
    }
}