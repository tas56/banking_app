import { ADD_ACCOUNT, FETCH_ACCOUNT } from "../actions/types";

const DEFAULT_STATE = {
    items: [],
    item: {}
}

export default function (state = DEFAULT_STATE, action) {
    switch(action.type){
        case FETCH_ACCOUNT:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}