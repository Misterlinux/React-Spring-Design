import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";

function footer(){

  
  return(
    <div className="position-relative d-flex flex-column align-items-center justify-content-center" style={{ height: "15vh", backgroundColor: "black" }}>

      <div className="d-flex row mx-0 mb-4" style={{ width: "65%" }}>

        <div className="col-4 position-relative d-flex justify-content-center align-items-center">
          <div className="circleIcon"></div>
          <h2 className="m-0" style={{ zIndex: 2 }}><a href="https://github.com/Misterlinux?tab=repositories"> 
            <FontAwesomeIcon icon={faLinkedin} />
          </a></h2>
        </div>

        <div className="col-4 position-relative d-flex justify-content-center align-items-center">
          <div className="circleIcon"></div>
          <h2 className="m-0" style={{ zIndex: 2 }}><a href="https://github.com/Misterlinux?tab=repositories"> 
            <FontAwesomeIcon icon={faGithub} />
          </a></h2>
        </div>
        <div className="col-4 position-relative d-flex justify-content-center align-items-center">
          <div className="circleIcon"></div>
          <h2 className="m-0" style={{ zIndex: 2 }}><a href="https://codesandbox.io/u/Misterlinux"> 
            <FontAwesomeIcon icon={faCodepen} />
          </a></h2>
        </div>
      </div>

      <p className=" text-success position-absolute bottom-0" style={{ height: "1em", fontSize: "0.7em" }}>
        Website by 
        <a className="text-decoration-none text-danger" href="https://github.com/Misterlinux?tab=repositories"> 
          Angelo Zarate, 
        </a>
        using 
        <a className="text-decoration-none text-danger" href="https://react-spring.dev/"> React-Spring  </a>
        and 
        <a className="text-decoration-none text-danger" href="https://it.legacy.reactjs.org/"> ReactJs </a>
      </p>
    </div>
  )
}

export default footer;