import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import * as sessionActions from "../../store/session";

function SignupFormPage() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])

    if (sessionUser) return <Redirect to='/' />

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password === confirmPassword) {
            setErrors([])
            return dispatch(sessionActions.signup({ email, username, password}))
              .catch(res => {
                  if (res.data && res.data.errors) setErrors(res.data.errors)
              })
        }
        return setErrors(['Confirm Password field must be the same as the Password field'])
    }

    return (
        <form className='pure-form-stacked' onSubmit={handleSubmit}>
            <fieldset>
            <legend>Sign Up</legend>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
                <input
                    className='pure-input-2-3'
                    type='text'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                ></input>
                <input
                    className='pure-input-2-3'
                    type='text'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                ></input>
                <input
                    className='pure-input-2-3'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                ></input>
                 <input
                    className='pure-input-2-3'
                    type='password'
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                ></input>
            <button type='submit'>Sign Up</button>
            </fieldset>
        </form>
    )
}

export default SignupFormPage