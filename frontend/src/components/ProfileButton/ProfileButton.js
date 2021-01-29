import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';
import * as M from 'materialize-css'

function ProfileButton({ user }) {

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

    
   
    const logout = (e) => {
        e.preventDefault()
        dispatch(sessionActions.logout())
    }

    

    return (
      <>   
          <ul>
            <li>
                <a className='col s2' href={`/users/${user.username}`}>{user.username}</a>
            </li>
            <li>
                <a> <i className="fas fa-user arrow_drop_down"></i></a>
            </li>
            <li>
                <a className='white-text' href='#' onClick={logout}>Log Out
                </a>
            </li>
          </ul>
      </>
    )
}

export default ProfileButton