export const SET_DATA = 'SET_DATA';
export const SET_USER = 'SET_USER';
export const SET_PAGE = 'SET_PAGE';

export const setdata=(payload)=>({type:SET_DATA, payload});
export const setUser = (payload) =>({type: SET_USER,payload});
export const setPage = (payload) => ({type: SET_PAGE,payload })