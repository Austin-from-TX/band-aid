import UploadTrack from './index'
import { Modal } from '../../context/Modal'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function UploadModal () {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <Link href="#upload"  onClick={() => setShowModal(true)}>Upload Track</Link>
        {showModal && (  
          <Modal onClose={() => setShowModal(false)}>
              <UploadTrack />
          </Modal>)}
        </>
    )
}

export default UploadModal