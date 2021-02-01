import { useState } from 'react'
import LoginForm from './LoginForm'
import { Modal } from '../../context/Modal'
import { NavLink } from 'react-router-dom'

function LoginFormModal() {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <NavLink to='/' className="pure-menu-link" onClick={() => setShowModal(true)}>Log In</NavLink>
        {showModal && ( 
          <Modal onClose={() => setShowModal(false)}>
              <LoginForm />
          </Modal>
        )}
        </>
    )
}

export default LoginFormModal