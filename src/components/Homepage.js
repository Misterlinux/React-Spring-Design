import { animated, useSpring } from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Primo from './Primo';
import Secondo from './Secondo';
import Terzo from './Terzo';
import Quarto from './Quarto';
import Quinto from './Quinto';
import Footer from './Footer';

//Parallax will adpat to previous components occupying the top/bottom spaces without sticky
function Home(){



  return(
    <div>

      <Primo />
      <Secondo />
      <Terzo />
      <Quarto />
      <Quinto />
      <Footer />

    </div>
  )
}

export default Home;