import img from '../lib/banner-guitar.jpeg'
import avatar from '../lib/avater1.png'
import "materialize-css/dist/css/materialize.min.css";

function Banner () {

     return (
        <>
            <div className='row'>
            <img className='responsive-img' src={img} alt='band-img' style={{width: '100%', height: '300px'}} />
            </div>
            <div style={{ position: 'relative', marginTop: '-315px'}}>
            <img src={avatar} className='circle responsive-img' alt="avatar" style={{height: '320px', width: '320px'}}></img>
            <a className="btn-floating btn-large waves-effect cyan darken-4"   style={{position: 'absolute', left: '220px', top: '250px'}}>
                <i className="material-icons">add</i>
            </a>
            </div>
        </>
    )
}

export default Banner 