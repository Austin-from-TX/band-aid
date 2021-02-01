import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom";
import  UploadModal  from '../UploadTrack/UploadModal.js'
import * as sessionActions from '../../store/session';
import * as M from 'materialize-css'
import SearchUsers from "../SearchUsers.js";

function ProfileButton({ user }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false)

    const openMenu = () => {
        if (showMenu) return
        setShowMenu(true)
    }

    useEffect(() => {
        if (!showMenu) return

        const closeMenu = () => {
            setShowMenu(false)
        }

        document.addEventListener('click', closeMenu)

        return () => document.removeEventListener('click', closeMenu)

    }, [showMenu])

    
   
    const logout = async (e) => {
        e.preventDefault()
        const user = await dispatch(sessionActions.logout())
        if (!user) history.push('/')
    }

    

    return (
      <>   
          <ul>
              <li>
                 <UploadModal />
              </li>
              <li>
                <Link to="/users">Find BandMates</Link>
              </li>
            <li>
                <Link className='col s2' to={`/users/${user.id}`}>{user.username}</Link>
            </li>
            <li>
                <Link> <i className="fas fa-user arrow_drop_down"></i></Link>
            </li>
            <li>
                <Link className='white-text' to='#' onClick={logout}>Log Out
                </Link>
            </li>
          </ul>
      </>
    )
}

export default ProfileButton