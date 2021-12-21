import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { setdata } from '../actions'
import { requestAddUser } from '../thunks/addUser'

export const Form = () => {
    const userData = useSelector((state) => state.form.userData)
    console.log('aaaaaaaa',userData);
    const history= useHistory();
    const dispatch = useDispatch()
    const { name, username, email } = userData;
    const handleChange = (e) => {
        dispatch(setdata({ ...userData, [e.target.name]: e.target.value }))
    }
    const handleSubmuit = (e) => {
        e.preventDefault()
        dispatch(requestAddUser(userData))
        history.push('/user')
    }


    return (
        <div>
            <form onSubmit={handleSubmuit}>
                <input type="name" placeholder='enter your name here' name='name' value={name} onChange={(e) => handleChange(e)} /> <br />
                <input type="username" placeholder='enter your username here' name='username' value={username} onChange={(e) => handleChange(e)} /> <br />
                <input type="email" placeholder='enter your email here' name='email' value={email} onChange={(e) => handleChange(e)} /> <br />
                <button type='submit' onClick={handleSubmuit}>submit</button>
            </form>

        </div>
    )
}