import { useState, useRef } from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    useParams,
    Routes,
    Outlet,
    useRouteError
} from "react-router-dom";
import { animated, useSpring, useTransition, useSprings, useInView} from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

  function Primo(){

    let [intro, inview] = useInView({
      threshold: 0.2,         //independently of scroll direction
    })

    let [lista, listaapi] = useSprings(2, i => ({
      y: inview ? "0vh" : "-40vh",
      opacity: inview ? 1 : 0,

      delay: i * 500
    }), [inview])

    let linea = useSpring({
      width: inview ? "100%" : "0%",

      delay: 1000
    })

    return(
      <>
      <div style={{ height: "55vh" }} >

        <div className="chef"></div>

        <div className="position-relative h-100">

        <div ref={intro} className="d-flex justify-content-center align-items-center" style={{ height: "100%"}}>
          <div className="d-block text-center">

            <animated.div className="fonte" style={lista[0]}>
              Hello my name is
            </animated.div>

            <animated.div className="fonte position-relative" style={lista[1]}>
              Louis Lavagne

              <animated.div className="linea" style={{width: linea.width}}></animated.div>
            </animated.div>

          </div>
        </div>
        </div>

      </div>
      </>
    )
  }
  
  export default Primo;