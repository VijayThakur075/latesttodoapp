import { SET_DATA } from "../actions";

const initialState = {
    userData: {
        name:'',
        username: '',
        email: '',
        
    }
}

export const form = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                userData: action.payload
            }

            default:
                return state
    }
}