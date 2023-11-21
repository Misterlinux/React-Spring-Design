import React, {useEffect} from "react";
import { animated, useSpring, useSprings, useInView, SpringValue, config} from '@react-spring/web'

import Task, { useStato, useStatodis } from './Context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireBurner } from "@fortawesome/free-solid-svg-icons";


function Values(){

  let stato = useStato()
  let dispatch = useStatodis()

  let entra = useSprings(2, i =>({
    from: { x: i ? -400 : 400, backgroundColor: i ? "#E2AB9C" : "#D17961" },
    to:[
      { x: 0 },
      { backgroundColor: i ? "#D17961" : "#E2AB9C" }
    ],
    config: config.wobbly
  }))
  let entrano = entra[0]

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="bg-success" style={{ paddingTop: "8vh" }}>
      <h1 className="text-center righteous text-secondary py-3">
        Our core values
      </h1>

      {stato.fires.map((cont, index) =>
        index % 2 ? (
          <animated.div className="py-4 row mx-0" style={entrano[0]} key={index}>
            <div className="col-4 align-self-center position-relative d-flex align-items-center justify-content-center">
              <animated.div
                className="position-absolute border border-4 border-primary p-3"
                style={{ height: "5.5em", width: "5.5em" }}
              ></animated.div>

              <div className="position-absolute mt-2">
                <FontAwesomeIcon className="fs-1" icon={faFireBurner} />
              </div>
            </div>
            <div className="col-8">
              <h3 className="text-start text-secondary"> {cont.name} </h3>
              <p>
                {cont.text}
              </p>
            </div>
          </animated.div>
        ) : (
          <animated.div className="py-4 row mx-0" style={entrano[1]} key={index}>
            <div className="col-8">
              <h3 className="text-start text-secondary"> {cont.name} </h3>
              <p>
                {cont.text}
              </p>
            </div>
            <div className="col-4 align-self-center position-relative d-flex align-items-center justify-content-center">
              <animated.div
                className="position-absolute border border-4 border-primary p-3"
                style={{ height: "5.5em", width: "5.5em" }}
              ></animated.div>

              <div className="position-absolute mt-2">
                <FontAwesomeIcon className="fs-1" icon={faFireBurner} />
              </div>
            </div>
          </animated.div>
        )
      )}
    </div>
  );
}

export default Values;