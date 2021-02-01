import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer className='page-footer grey lighten-2'>
        <div className='row'>
          <h6 className='font center black-text'>
              React | Redux | NodeJS | PostgresQL | Materialize CSS
          </h6>
          <h6 className='font center black-text'>
            Wanna Hire Me?
         </h6>
          <h6 className='font center black-text'>
            <b>Find My Information Below</b>
          </h6>
  
         
         
        </div>
        <div className='footer-copyright blue-grey darken-4'>
          <div className='container'>
            <a className='grey-text text-lighten-4' href='https://github.com/Austin-from-TX'><b> Github </b></a>
            <a className='grey-text text-lighten-4 right ' href='https://www.linkedin.com/in/stevenaustinhoward/'><b> LinkedIn </b></a>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer