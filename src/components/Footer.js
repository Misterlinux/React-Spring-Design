import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faGithub, faCodepen } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
//npm i --save @fortawesome/free-brands-svg-icons

function footer(){

  

  return(
    <div className="position-relative d-flex flex-column align-items-center" style={{ height: "15vh", backgroundColor: "black" }}>

      <div className="d-flex justify-content-center align-items-center pt-5" style={{ height: "8vh" }}>
        <h2 className="border rounded-circle border-success p-3"><a href="https://github.com/Misterlinux?tab=repositories"> 
          <FontAwesomeIcon icon={faLinkedin} />
        </a></h2>
        <h2 className="border rounded-circle border-success p-3 mx-2"><a href="https://github.com/Misterlinux?tab=repositories"> 
          <FontAwesomeIcon icon={faGithub} />
        </a></h2>
        <h2 className="border rounded-circle border-success p-3"><a href="https://github.com/Misterlinux?tab=repositories"> 
          <FontAwesomeIcon icon={faCodepen} />
        </a></h2>
      </div>

      <p className=" text-success position-absolute bottom-0" style={{ height: "1em" }}>
        This webste was made by Angelo Zarate using ...
      </p>
    </div>
  )
}

export default footer;