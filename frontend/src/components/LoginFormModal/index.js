import { useState } from 'react'
import LoginForm from './LoginForm'
import { Modal } from '../../context/Modal'

function LoginFormModal() {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <button onClick={() => setShowModal(true)}>Log In</button>
        {console.log(showModal)}
        {showModal && ( 
          <Modal onClose={() => setShowModal(false)}>
              <LoginForm />
          </Modal>
        )}
        </>
    )
}

export default LoginFormModal