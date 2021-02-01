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
        <div className='pure-menu pure-menu-horizontal pure-menu-scrollable' id='navbar'>
            <ul className="pure-menu-list" id='navbar-list'>
                <div className='left-links'>
                <li className="pure-menu-item pure-menu-selected"><NavLink exact to='/' className="pure-menu-link">Home</NavLink></li> 
                </div>
                <div className='right-links'>
                {sessionUser ? (<li className="pure-menu-item pure-menu-selected">  <ProfileButton user={sessionUser} /></li>) :
                (<>
                <li className="pure-menu-item pure-menu-selected"><LoginFormModal /></li>
                <li className="pure-menu-item pure-menu-selected">  <SignupModal /></li>
                </>)}
                </div> 
            </ul>
        </div>
    )
}

export default Navigation