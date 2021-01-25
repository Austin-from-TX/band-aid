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
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Username or Email            
                <input
                value={credential}
                onChange={e => setCredential(e.target.value)}
                required
                >
            </input>
            </label>
            <label>
                <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                >
                </input>
            </label>
            <button type='submit'>Log In</button>
        </form>
    )
}

export default LoginForm