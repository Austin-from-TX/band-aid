import SignupFormPage from './index'
import { Modal } from '../../context/Modal'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function SignupModal () {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <a href="/signup"  onClick={() => setShowModal(true)}>Sign Up</a>
        {showModal && (  
          <Modal onClose={() => setShowModal(false)}>
              <SignupFormPage />
          </Modal>)}
        </>
    )
}

export default SignupModal