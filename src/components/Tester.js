import React, { useEffect } from "react";
import Task, { useStato, useStatodis } from './Context';
import { animated, useSpring, useSprings, useInView, SpringValue, config} from '@react-spring/web'

function Testers(){

  let stato = useStato()
  let dispatch = useStatodis()

  let presents= useSprings(2, i => ({
    from: {x: -300, y: -400, opacity: 0, back: i ? "#9BA8D9" : "#3B4EA1" },
    to: [
      {x: 0},
      {y: 0, opacity: 1, back: i ? "#3B4EA1" : "#9BA8D9" }
    ],
    config: config.wobbly
  }))

  let present = presents[0][0]
  let present1 = presents[0][1]

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="bg-primary" style={{ paddingTop: "8vh" }}>
      <h1 className="text-center righteous text-secondary py-3">
        Our Testimonials
      </h1>

      {stato.people.map((cont, index)=> 
        index % 2 ? (
          <animated.div className="row mx-0 d-flex align-items-center py-4" 
            style={{ backgroundColor: present.back }}>
            <div className="col-5">
              <animated.img className="img-fluid" style={{ x: present.x }}
                src={cont.photo}
              />
            </div>
            <animated.div className="col-7" style={{ y: present.y, opacity: present.opacity }}>
              <h2>{cont.name}</h2>
              <p>{cont.job}</p>
              <p>
                {cont.text}
              </p>
            </animated.div>
          </animated.div>
        ) : (
          <animated.div className="row mx-0 d-flex align-items-center py-4"
            style={{ backgroundColor: present1.back }}>
            <animated.div className="col-7 text-success" style={{ y: present1.y, opacity: present1.opacity }}>
              <h2>{cont.name}</h2>
              <p>{cont.job}</p>
              <p className="">
                {cont.text}
              </p>
            </animated.div>
            <div className="col-5">
              <animated.img className="img-fluid" style={{ x: present1.x }}
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