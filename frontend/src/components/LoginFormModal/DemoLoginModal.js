import { useState } from 'react'
import DemoLoginForm from './DemoLoginForm'
import { Modal } from '../../context/Modal'
import { NavLink } from 'react-router-dom'

function DemoLoginModal() {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <NavLink to='/' className="pure-menu-link" onClick={() => setShowModal(true)}>Demo </NavLink>
        {showModal && ( 
          <Modal onClose={() => setShowModal(false)}>
              <DemoLoginForm />
          </Modal>
        )}
        </>
    )
}

export default DemoLoginModal