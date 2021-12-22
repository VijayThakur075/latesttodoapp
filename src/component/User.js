import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setdata } from '../actions';
import { setPage } from '../actions';
import { requestDeleteUser, requestUser } from '../thunks/userrequest';

export const User = () => {
    const user = useSelector(state => state.users.user);
    const filter = useSelector(state => state.filterPage.filter)
    console.log('vvvvv', filter);
    const dispatch = useDispatch();

    const handlePageChange = (acc) => {
        dispatch(setPage({ page: filter.page + acc }))
    }

    const handleChangeLimit = (e) => {
        dispatch(setPage({ [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        dispatch(requestUser(filter))
    }, [filter.page, filter.limit])

    const deleteUser = (id) => {
        dispatch(requestDeleteUser(id))
    }

    const handleChange = (e) => {
        const id = e.target.id;
        dispatch(setdata(prevState => {
            return {
                user: prevState.user.map((li) => (
                    li.id === +id ? {
                        ...li,
                        value: !li.value
                    } : li
                ))
            }
        })
        )
    }

    const handleDelete = () => {
        // dispatch(setdata(prevState => {
        //     return {
        //         user: prevState.user.filter(li => !li.value)
        //     }
        // }))

        let arrayId = [];
        user.forEach(d => {
            if (d.select) {
                arrayId.push(d.id)
            }
        });
        console.log('fffffff', arrayId);
    }


    return (
        <>
            <div>
                {user.map((item) => (
                    <ul>
                        <li key={item.id}>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.username}</li>
                        <li>{item.email}</li>
                        <input type='checkbox' id={item.id} checked={item.value} onChange={handleChange} />
                        <button type='submit' onClick={() => deleteUser(item.id)}>delete</button>
                        <Link to={`/edituser/${item.id}/:id`}>edituser</Link>
                    </ul>
                )
                )}
                <button onClick={handleDelete}>delete all</button>

            </div>

            <select value={filter.limit} name="limit" onChange={handleChangeLimit}>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
            <button disabled={filter.page === 1} onClick={() => handlePageChange(-1)}>Prev</button>{" "}
            <button disabled={filter.page === filter.page} onClick={() => handlePageChange(+1)}>Next</button>
        </>
    )
}
