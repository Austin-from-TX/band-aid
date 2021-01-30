import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import * as M from 'materialize-css'

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
                  <a href='Upload Track'>Upload Track</a>
              </li>
              <li>
                  <a href='Find Users'>Find BandMates</a>
              </li>
            <li>
                <a className='col s2' href={`/users/${user.id}`}>{user.username}</a>
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