import { animated, useSpring, useSprings, useInView } from '@react-spring/web'
import Task, { useStato, useStatodis } from './Context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireBurner } from "@fortawesome/free-solid-svg-icons";

function Terzo(){
  //If you want t take the useSprings() as an array of springValues
  //keep the api, so it wont insert the script in the array

  let [sect, seeSect] = useInView({
    threshold: 0.5
  })

  let [gear, apigear] = useSprings(3, i => ({
    transform: seeSect ? `rotate(360deg)` : "rotate(0deg)",
    delay: i * 200,
  }), [seeSect])

  let stato = useStato()
  let dispatch = useStatodis()

  return(
    <div style={{ height: "60vh" }}>
        
      <div className="row mx-0" ref={sect}>

        <h1 className="text-center fonte">Our Principles</h1>

        {stato.fires.map((cont, index)=>(

          <div className="col-4 p-0">
            <div className="bg-secondary position-relative text-success p-3 d-flex justify-content-center align-item-center"
              style={{ height: "5em" }}>

              <animated.div className='position-absolute border border-4 border-success p-2' 
                style={{ height: "2.5em", width: "2.5em",...gear[index] }}>  
              </animated.div>

              <div className='position-absolute mt-2'>
                <FontAwesomeIcon icon={faFireBurner}/>
              </div>

            </div>
            <div className="bg-primary p-2" style={{ height: "45vh" }}>
              <h1> {cont.name} </h1>
              <p> {cont.text} </p>
              <div className="text-center">
                <button className="btn btn-sm btn-danger text-white">See More</button>
              </div>
            </div> 
          </div>

        ))}

      </div>

    </div>
  )
}

export default Terzo;