import RecorderForm from './RecorderForm'
import { Modal } from '../../context/Modal'
import { useState } from 'react'


function RecorderModal ({ track }) {
    
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <button href="#"  className='btn btn-header cyan darken-4 modal-trigger text-lighten-5' style={{marginBottom: '45px' }} onClick={() => setShowModal(true)}>Upload</button>
        {showModal && (  
          <Modal onClose={() => setShowModal(false)}>
              <RecorderForm track={track} />
          </Modal>)}
        </>
    )
}

export default RecorderModal