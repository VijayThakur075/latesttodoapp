import axios from "axios";
import { setdata } from "../actions";

const client = axios.create({
    baseURL: 'http://localhost:3008'
})

export  const requestAddUser = (userData) => async (dispatch) => {
    try{
        const res= await client.post(`/users`, userData)
        console.log(res.data)
        console.log('cccc',userData);
        dispatch(setdata(res.data))
    }
    catch(err){
        console.log(err)
    }
}