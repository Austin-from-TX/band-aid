import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import ProfileButton from "../Navigation/ProfileButton";
import SignupModal from "../SignupForm/SignupModal";
// import './NavBar.css'

function NavBar ({ isLoaded }) {

    const sessionUser = useSelector(state => state.session.user)
    console.log(sessionUser)
    return (
        <div>
            
        <nav className='nav z-depth-0'>
            <div className="nav-wrapper blue-grey darken-4">
                <a href="#" className="brand-logo">Home
                    <u>
                    <span className='teal-text text-accent-3 i-line'></span>
                    </u>
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                {sessionUser ? (<li><ProfileButton user={sessionUser} /></li>) :
                (<>
                <li><a href='#' className='btn btn-nav transparent z-depth-0 '><LoginFormModal /></a></li>
                <li><a href='#'className='btn btn-nav transparent z-depth-0 '>  <SignupModal /></a></li>
                </>)}
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default NavBar