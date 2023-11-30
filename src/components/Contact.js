import React, {useState} from 'react';
import { animated, useSpring, useSprings, config} from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Secondo from './Secondo';
import Terzo from './Terzo';

import bowl from "../images/rice.svg"
import { ReactComponent as Bowl } from "../images/rice.svg";
import { ReactComponent as Pot } from "../images/potato.svg";
import { ReactComponent as Ham } from "../images/ham.svg";

//Parallax will adpat to previous components occupying the top/bottom spaces without sticky
function Contact(){

  let [nome, setNome] = useState("")
  let [nomer, setNomer] = useState(3)

  let middle = useSpring({
    from: {x: 0},
    to: [
      { x: 15},
      { x: 0 },
      { x: 10 },
      { x: 0 },
    ],
    config: {duration: 200}
  })

  let hot = useSpring({
    from: { transform: "scale(1)" },
    to: [
      { transform: "scale(1.2)" },
      { transform: "scale(1)" },
      { transform: "scale(1.2)" },
      { transform: "scale(1)" }
    ],
    config: {duration: 200}
  })

  function foodani(){

    if(nomer<= 4){
      return <animated.div className="mx-2" style={{ display: "inline-block" }} >
        <Bowl style={{ fill: "orange", width: "1.5em", height: "1.5em" }} />
      </animated.div>
    }else if(nomer > 4  && nomer <= 8)
      return <animated.div className="mx-2" style={{ display: "inline-block", ...middle }}>
        <Pot style={{ fill: "#3B4EA1", width: "1.5em", height: "1.5em" }} />
      </animated.div> 
    else{
      return <animated.div className="mx-2" style={{ display: "inline-block", ...hot }}>
        <Ham style={{ fill: "red", width: "1.5em", height: "1.5em" }} />
      </animated.div> 
    }

  }

  function vediamo(e){
    e.preventDefault();

    let forma= e.target
    let formdata = new FormData(forma)
    let {name, message, numer} = Object.fromEntries(formdata.entries())

    let comment = numer > 8 ? 
      "Thanks for the rating" 
      : 
      numer < 4 ?
        "Alright, I will try to do better"
        :
        "Perfectly balanced you say?"

    window.alert(`
      Name: ${name},
      Message: ${message},
      ${ comment }
    `)
  }


  return(
    <div>

      <div className="row mx-0 bg-success " style={{ paddingTop: "10vh" }}>
        <div className="col-4 d-flex align-items-center justify-content-center">

          <div className='pic border rounded-circle border-primary border-5'></div>

        </div>
        <div className="col-8 d-flex flex-column justify-content-center text-secondary">
          <h1 className='righteous'>Louis Lavagne</h1>
          <p>Master chef of 2nd level</p>
        </div>

        <div className="d-flex justify-content-center">
          <div className="row col-12 col-md-10 mx-0 py-2">
            <div className="col-4 d-flex flex-column justify-content-center">
              <p className='m-0'>Works for:</p>
              <p style={{ fontSize: "0.8em" }}><b>Catering SpA </b></p>
            </div>
            <div className="col-4 d-flex flex-column justify-content-center p-0">
              <p className='m-0'>Phone</p>
              <p style={{ fontSize: "0.8em" }}><b>342-126344001</b></p>
            </div>
            <div className="col-4 d-flex flex-column justify-content-center p-0">
              <p className='m-0'>Email</p>
              <p style={{ fontSize: "0.8em" }}><b>LouisLa@cmail.com</b></p>
            </div>
          </div>
        </div>

      </div>

      <form className="row mx-0 justify-content-center bg-danger py-3 pb-4" onSubmit={ vediamo } style={{ height: "55vh" }}>

        <div className="col-5 col-md-4 p-2 d-flex flex-column justify-content-center">
          <div className='form-floating'>
            <input name='name' id="nome" required
              type="text" className="form-control" placeholder='name'/>
            <label htmlFor="#nome" className="form-label">Name</label>
          </div>

          <div className='form-floating'>
            <input name='desc' id="desc" type="text" className="form-control" placeholder='mail' required/>
            <label htmlFor="#desc" className="form-label">Description</label>
          </div>
        </div>

        <div className="col-7 col-md-6 p-2 d-flex align-items-center justify-content-center">
          <textarea name='message' id="message" rows="4" className="form-control" 
            placeholder='Write your commission' required>
          </textarea>
        </div>

        <div className='text-center col-11 col-md-10'>
          <label htmlFor="follow" className="form-label text-white d-flex justify-content-center alin-items-center">
            Rate the website
            { foodani() }
          </label>
          <input name='numer' value={nomer} onChange={(e)=> setNomer(e.target.value)} id="follow" 
            min="0" max="10" steps="1" type="range" className="form-range" />
        </div>
      
        <div className="text-center col-10">
          <button type='submit' className="btn p-3 btn-secondary text-white">Send</button>
        </div>
      </form>

    </div>
  )
}

export default Contact;