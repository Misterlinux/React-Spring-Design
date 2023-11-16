import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faGithub, faCodepen } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
//npm i --save @fortawesome/free-brands-svg-icons

function footer(){

  

  return(
    <div className="position-relative d-flex flex-column align-items-center justify-content-center" style={{ height: "15vh", backgroundColor: "black" }}>

      <div className="d-flex row mx-0 mb-4" style={{ width: "65%" }}>
        <div className="col-4 position-relative d-flex justify-content-center align-items-center">
          <div className="circleIcon"></div>
          <h2 className="m-0"><a href="https://github.com/Misterlinux?tab=repositories"> 
            <FontAwesomeIcon icon={faLinkedin} />
          </a></h2>
        </div>
        <div className="col-4 position-relative d-flex justify-content-center align-items-center">
          <div className="circleIcon"></div>
          <h2 className="m-0"><a href="https://github.com/Misterlinux?tab=repositories"> 
            <FontAwesomeIcon icon={faGithub} />
          </a></h2>
        </div>
        <div className="col-4 position-relative d-flex justify-content-center align-items-center">
          <div className="circleIcon"></div>
          <h2 className="m-0"><a href="https://github.com/Misterlinux?tab=repositories"> 
            <FontAwesomeIcon icon={faCodepen} />
          </a></h2>
        </div>
      </div>

      <p className=" text-success position-absolute bottom-0" style={{ height: "1em" }}>
        This webste was made by Angelo Zarate using ...
      </p>
    </div>
  )
}

export default footer;