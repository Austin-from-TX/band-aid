 
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import DemoLoginModal from "../LoginFormModal/DemoLoginModal";
import ProfileButton from "../ProfileButton/ProfileButton";
import icon from '../../lib/logo1.png'
import SignupModal from "../SignupForm/SignupModal";
import { useEffect } from 'react'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

function NavBar ({ isLoaded }) {

    const sessionUser = useSelector(state => state.session.user)
    
    useEffect(() => {
        var sidenav = document.querySelectorAll('#slide-out');
        M.Sidenav.init(sidenav, {});
      }, [])


    return (
        <div className='navbar-fixed'>
            
            <nav className='nav z-depth-0' >
                <div className="nav-wrapper blue-grey darken-4">
                    
                    <Link to="/" className="brand-logo"><img className='brand-logo'src={icon} style={{ margin: '5px', width: '60px', height: '60px'}}></img>
                        <span style={{marginLeft: '75px'}}>BandAid</span>
                    </Link>
                    <ul className="right hide-on-med-and-down">
                        {sessionUser ? (<li><ProfileButton user={sessionUser} /></li>) :
                        (<>
                        <li><a href='/login' className='btn btn-nav transparent z-depth-0 '><DemoLoginModal /></a></li>
                        <li><a href='/login' className='btn btn-nav transparent z-depth-0 '><LoginFormModal /></a></li>
                        <li><a href='#signup'className='btn btn-nav transparent z-depth-0 '>  <SignupModal /></a></li>
                        </>)}
                    </ul>
                    <Link to="#menu" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                </div>
            </nav>

            <ul className="sidenav" id='slide-out'>
                {sessionUser ? (<li><ProfileButton user={sessionUser} /></li>) :
                (<>
                <li><a href='#login' className='btn btn-nav transparent z-depth-0 '><LoginFormModal /></a></li>
                <li><a href='#signup'className='btn btn-nav transparent z-depth-0 '>  <SignupModal /></a></li>
                </>)}
            </ul>
        </div>
    )
}

export default NavBar