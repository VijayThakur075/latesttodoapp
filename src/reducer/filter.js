import { SET_PAGE } from "../actions";

const initialState={
    filter:{
        page:1,
        limit:5,
    }
}

export const filterPage=(state=initialState, action)=>{
    switch(action.type){
        case SET_PAGE:
            return{
                ...state,
                filter :{
                    ...state.filter,
                    ...action.payload,
                }
            }
            default:
                return state
    }
}