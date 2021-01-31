import img from '../lib/banner-guitar.jpeg'
import avatar from '../lib/avater1.png'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

function Banner () {

    return (
        <>
            <div className='row'>
            <img className='responsive-img' src={img} alt='band-img' style={{width: '100%', height: '300px'}} />
            </div>
            <div style={{marginTop: '-315px'}}>
            <img src={avatar} className='circle responsive-img' alt="avatar" style={{height: '320px', width: '320px'}}></img>
            </div>
        </>
    )
}

export default Banner 