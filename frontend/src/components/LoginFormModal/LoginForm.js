import { useState } from "react"
import { login }  from '../../store/session'
import { useDispatch, useSelector} from 'react-redux'
import './LoginForm.css';
import { Redirect } from 'react-router-dom'

function LoginForm() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.session.user);
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    

   
    if (user) return <Redirect to="/" />;
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(login({ credential, password })).catch((res) => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });
  };

    return (
        <form className='pure-form pure-form-stacked' id='form' onSubmit={handleSubmit}>
          <fieldset>
            <legend>Login</legend>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>         
                <input
                className='pure-input-2-3'
                type='text'
                value={credential}
                onChange={e => setCredential(e.target.value)}
                placeholder='Username or Email'
                required
                >
            </input>
                <input
                className='pure-input-2-3'
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='Password'
                required
                >
                </input>
            <button type='submit' className='pure-button pure-button-primary pure-button-active'>Log In</button>
            </fieldset>
        </form>
    )
}

export default LoginForm