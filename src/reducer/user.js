import { SET_USER } from "../actions";

const initialState = {
   user: [],
}

export const users = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }

            default:
                return state
    }
}