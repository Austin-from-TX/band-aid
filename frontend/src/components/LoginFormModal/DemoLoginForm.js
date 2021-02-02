import { useState } from "react"
import { login }  from '../../store/session'
import { useDispatch, useSelector} from 'react-redux'
import './LoginForm.css';
import { Redirect, useHistory} from 'react-router-dom'


function DemoLoginForm() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.session.user);
    const [credential, setCredential] = useState('austin-tacious')
    const [password, setPassword] = useState('Brookflush2')
    const [errors, setErrors] = useState([])
    const history = useHistory()

   
    if (user) return <Redirect to='/' />;
  const handleSubmit =  async (e) => {
    e.preventDefault();
    setErrors([]);
    const user = await dispatch(login({ credential, password })).catch((res) => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });
    if (user) history.push(`/users/${user.id}`)
  };

    return (
      <div className='row'>
        <form className='pure-form-stacked col s12' id='form' onSubmit={handleSubmit}>
          <fieldset>
            <legend>Demo </legend>
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
            <button type='submit' className='btn btn-header cyan darken-4 modal-trigger text-lighten-5'>Log In</button>
            </fieldset>
        </form>
      </div>
    )
}

export default DemoLoginForm