import UploadTrack from './index'
import { Modal } from '../../context/Modal'
import { useState } from 'react'


function UploadModal () {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <a href="#upload"  onClick={() => setShowModal(true)}>Upload Track</a>
        {showModal && (  
          <Modal onClose={() => setShowModal(false)}>
              <UploadTrack />
          </Modal>)}
        </>
    )
}

export default UploadModal