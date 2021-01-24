import { useState } from "react"
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    
    if (sessionUser) return (
        <Redirect to='/' />
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([])
        return dispatch(sessionActions.login({ credential, password }))
          .catch((res) => {
              if (res.data && res.data.errors) setErrors(res.data.errors)
          })
    }

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <input
              value={credential}
              onChange={e => setCredential(e.target.value)}
              placeholder='Username or Email'
            >
            </input>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Password'
            >
            </input>
            <button type='submit'>Log In</button>
        </form>
    )
}

export default LoginFormPage