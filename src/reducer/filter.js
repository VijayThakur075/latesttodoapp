import { SET_PAGE } from "../actions";

const initialState={
    filter:{
        page:1,
        limit:3,
    }
}

export const filterPage=(state=initialState, action)=>{
    switch(action.type){
        case SET_PAGE:
            return{
                ...state,
                filter :action.payload,
            }
            default:
                return state
    }
}