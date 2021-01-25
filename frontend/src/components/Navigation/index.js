import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import './Navigation.css';
import LoginFormModal from "../LoginFormModal";
import SignupModal from "../SignupForm/SignupModal";

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
              <LoginFormModal />
              <SignupModal />
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