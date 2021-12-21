import axios from "axios";
import { setUser, setdata } from "../actions";

const client = axios.create({
    baseURL: 'http://localhost:3008'
})

export  const requestUser = (prevfilter) => async (dispatch) => {
    try{
        const params = { _limit: prevfilter.limit, _page: prevfilter.page}
        const res= await client.get(`/users`, {params})
        console.log(res.data)
        dispatch(setUser(res.data))
    }
    catch(err){
        console.log(err)
    }
}


export  const requestDeleteUser = (id) => async (dispatch) => {
    console.log('sssssssss', id);
    try{

        await client.delete(`/users/${id}`)
            window.location.reload()
    }
    catch(err){
        console.log(err)
    }
}

export const requestEditUser=(id)=> async(dispatch)=>{
    try{

        const result = await client.get(`users/${id}`)
        dispatch(setdata(result.data)) 

    }catch(err){
        console.log(err);
    }
}