import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { setPage } from '../actions';
import { requestDeleteUser, requestUser } from '../thunks/userrequest';

export const User=()=>{
const user= useSelector(state=> state.users.user);
const filter = useSelector(state => state.filterPage.filter)
const dispatch = useDispatch();

const handlePageChange=(acc)=>{
    dispatch(setPage({page: acc + filter.page  }))
}

const handleChangeLimit=(e)=>{
    dispatch(setPage({[e.target.name]:e.target.value}))
}

useEffect(()=>{
    dispatch(requestUser(filter))
},[filter.page, filter.limit])

const deleteUser=(id)=>{
    dispatch(requestDeleteUser(id))
}


 
    return (
        <>
        <div>
             {user.map((item)=>(
                 <ul>
                        <li key={item.id}>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.username}</li>
                        <li>{item.email}</li>

                      <button type='submit' onClick={()=>deleteUser(item.id)}>delete</button>
                      <Link to={`/edituser/${item.id}/:id`}>edituser</Link>
                 </ul>
             ) 
             )}
             
        </div>

        <select value={filter.limit} name="limit" onChange={handleChangeLimit}>
        <option value={2}>2</option>

                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
        <button  disabled={filter.page === 1} onClick={() => handlePageChange(-1)}>Prev</button>{ " "}
            <button  disabled={filter.page === filter.page} onClick={() => handlePageChange(1)}>Next</button> 
        </>
    )
}
