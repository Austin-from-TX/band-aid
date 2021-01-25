import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import './Navigation.css';

function Navigation ({ isLoaded }) {

    const sessionUser = useSelector(state => state.session.user)

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        )
    } else {
        sessionLinks = (
            <>
              <NavLink to='/login'>Login</NavLink>
              <NavLink to='/signup'>Signup</NavLink>
            </>
        )
    }

    return (
        <ul>
            <li>
              <NavLink exact to='/'>Home</NavLink>
              {isLoaded && sessionLinks}
            </li>   
        </ul>
    )
}

export default Navigation