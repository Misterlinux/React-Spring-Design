import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
  Routes,
  Outlet,
  useRouteError
} from "react-router-dom";
import { animated, useSpring, useInView} from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faBurger, faMugHot, faIceCream, faMartiniGlassCitrus, faPizzaSlice, faEnvelope } 
from "@fortawesome/free-solid-svg-icons";

function Secondo(){

  let [about, seeAbout] = useInView({
    threshold: 0.5
  })

  let drop = useSpring({
    opacity: seeAbout ? 1 : 0,
    top: seeAbout ? "20%" : "-10%"
  })

  return(
    <div style={{ height: "40vh" }}>

      <div className="d-flex justify-content-end position-relative mt-2">
        
        <animated.h4 ref={about} className="lato position-absolute" style={{ left: 0, ...drop}}>About me</animated.h4>
        <div className="border-start border-danger border-3 p-2" style={{ width: "90%" }}>
          <div className="bg-secondary text-white p-1">
            <h5>Master chef of 2nd grade</h5>
            <p>Avaiable for the following services</p>
          </div>

          <div className="gridskill bg-primary text-white p-2">
            <div><FontAwesomeIcon icon={faUtensils}/> Cathering</div>
            <div><FontAwesomeIcon icon={faBurger}/> Burger Shop</div>
            <div><FontAwesomeIcon icon={faMugHot}/> Barmaid </div>
            <div><FontAwesomeIcon icon={faIceCream}/> ice-cream man </div>
            <div><FontAwesomeIcon icon={faMartiniGlassCitrus}/> Bartender </div>
            <div><FontAwesomeIcon icon={faPizzaSlice}/> Pizza chef </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Secondo;