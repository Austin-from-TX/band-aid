import React, { useEffect } from "react";
import bg from '../../lib/guitar-track.jpeg';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import SignupModal from "../SignupForm/SignupModal";


function Header() {

  useEffect(() => {
    var modal = document.querySelectorAll('.modal');
    M.Modal.init(modal, {});
  }, [])
  
    return (
      <div className='row'>
        <div className='col s12 m6'>
          <img className='responsive-img' src={bg} alt='band_img' />
        </div>
        <div className='col s12 m6'>
          <h4 className='font'>
            <b>Rehearse Online</b>
          </h4>
          <h1 className='title indigo-text text-lighten-1'>
            Band Aid
          </h1>
          <p className='para'>
            Feeling the lockdown blues?  Practice rocking the blues instead!<br />
            BandAid is a tool for recording and uploading music tracks to share <br />
            with others.
          </p>
          <p>Can't make it to band practice?  No problem!  Play along with your <br />
          bandmates'tracks so you don't fall behind.  Keep your skills sharp for your <br />
          next big gig! 
          </p>
          <h6 className='font'>
            <b>Start Rocking Today</b>
          </h6>
          <a href='#signup' className='btn btn-header cyan darken-4 modal-trigger text-lighten-5' style={{color: 'white'}}>
            <SignupModal />
          </a>
        </div>

      
    </div>
    );
  }

  export default Header