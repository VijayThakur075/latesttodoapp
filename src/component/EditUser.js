import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { setdata } from '../actions'
import axios from 'axios'
import { requestEditUser } from '../thunks/userrequest'

export const EditUser = () => {
    const userData = useSelector((state) => state.form.userData)
    const {id} = useParams()
    console.log('aaaaaaaa', userData);
    const history = useHistory();
    const dispatch = useDispatch()
    const { name, username, email } = userData;
    const handleChange = (e) => {
        dispatch(setdata({ ...userData, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        dispatch(requestEditUser(id))    
    }, [])

    const handleSubmuit = async(e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3008/users/${id}`, userData)
        history.push('/user')
    }

    return (
        <div>
            <h1>edit user</h1>
            <form onSubmit={handleSubmuit}>
                <input type="name" placeholder='enter your name here' name='name' value={name} onChange={(e) => handleChange(e)} /> <br />
                <input type="username" placeholder='enter your username here' name='username' value={username} onChange={(e) => handleChange(e)} /> <br />
                <input type="email" placeholder='enter your email here' name='email' value={email} onChange={(e) => handleChange(e)} /> <br />
                <button type='submit' onClick={handleSubmuit}>update user</button>
            </form>

        </div>
    )
}