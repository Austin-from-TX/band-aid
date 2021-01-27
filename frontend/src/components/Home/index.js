import { NavLink } from "react-router-dom";
import M from 'materialize-css/dist/js/materialize.min.js'

function Home() {

    document.addEventListener('DOMContentLoaded', function() {
        const options = {}
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, options);
      });

    return (
          
             <div class="carousel">
                <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1/"></img></a>
                <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></img></a>
                <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></img></a>
                <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"></img></a>
                <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"></img> </a>
            </div>

    )
    
}

export default Home