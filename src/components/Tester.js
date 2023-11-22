import React, { useEffect } from "react";
import Task, { useStato, useStatodis } from './Context';
import { animated, useSprings, config} from '@react-spring/web'

function Testers(){

  let stato = useStato()

  let [[uno, due], preApi] = useSprings(2, i => ({
    from: {x: -300, y: -400, opacity: 0, back: i ? "#9BA8D9" : "#3B4EA1" },
    to: [
      {x: 0},
      {y: 0, opacity: 1, back: i ? "#3B4EA1" : "#9BA8D9" }
    ],
    config: config.wobbly
  }))

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="bg-primary d-flex flex-column align-items-center" style={{ paddingTop: "6vh" }}>
      <h1 className="text-center righteous text-secondary py-3">
        Our Testimonials
      </h1>

      {stato.people.map((cont, index)=> 
        index % 2 ? (
          <animated.div className="row mx-0 d-flex align-items-center col-md-10 py-4" key={index}
            style={{ backgroundColor: uno.back }}>

            <div className="col-5 col-md-4 d-flex justify-content-center">
              <animated.img className="img-fluid" style={{ x: uno.x }}
                src={cont.photo}
              />
            </div>
            <animated.div className="col-7 col-md-8" style={{ y: uno.y, opacity: uno.opacity }}>
              <h2>{cont.name}</h2>
              <p>{cont.job}</p>
              <p>
                {cont.text}
              </p>
            </animated.div>
          </animated.div>
        ) : (
          <animated.div className="row mx-0 d-flex align-items-center col-md-10 py-4" key={index}
            style={{ backgroundColor: due.back }}>
            <animated.div className="col-7 col-md-8 text-success" style={{ y: due.y, opacity: due.opacity }}>
              <h2>{cont.name}</h2>
              <p>{cont.job}</p>
              <p className="">
                {cont.text}
              </p>
            </animated.div>
            <div className="col-5 col-md-4 d-flex justify-content-center">
              <animated.img className="img-fluid" style={{ x: due.x }}
                src={cont.photo}
              />
            </div>
          </animated.div>
        )
      )}

    </div>
  );
}

export default Testers;