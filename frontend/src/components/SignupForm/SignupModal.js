import SignupFormPage from './index'
import { Modal } from '../../context/Modal'
import { useState } from 'react'

function SignupModal () {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <button onClick={() => setShowModal(true)}>Sign Up</button>
        {console.log(showModal)}
        {showModal && ( 
          <Modal onClose={() => setShowModal(false)}>
              <SignupFormPage />
          </Modal>
        )}
        </>
    )
}

export default SignupModal