import { useState } from "react";
import Task, { useStato, useStatodis } from './Context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Modal from 'react-bootstrap/Modal';

var classNames = require('classnames');

function Quarto(){

  //I guess we can't use percentage if we want the content to be overflow limited
  let stato = useStato()
  let dispatch = useStatodis()
  
  let [user, setUser] = useState(0)

  function reading(index){
    setUser(index)
  }

  let btnClass = classNames({
    btn: true,
    "btn-primary" : user % 2 == 0,
    "btn-success" : user % 2 == 1,
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div style={{ height: "60vh" }}>
      
      <div className="row mx-0" style={{ height: "60vh" }}>
        <div className="col-4 p-0 d-flex flex-column" style={{ overflowY: "scroll", height: "inherit" }}>
        
          {stato.meals.map((cont, index)=>(

            <div className={`${(index == user) ? "bg-success" : "bg-danger"} p-2 d-flex align-items-center justify-content-center flex-column border-success border-bottom border-1`}
              onClick={()=>( reading(index) )}
              style={{ height: "20vh" }} key={index}>
              
              <div className="row mx-0 mb-2 d-flex align-items-center">
                <div className="col-3 p-0 d-flex align-items-center">
                  <img width="40" height="35" className="img-fluid rounded" src={cont.img}></img>
                </div>
                <div className="col-9 p-0 d-flex align-items-center">
                  <p className="m-0 ms-1 righteous"> {cont.name} </p>
                </div>
              </div>

              <p style={{ overflow: "hidden" }}><b> {cont.desc} </b></p>
            </div>
          ))
          }

        </div>
        <div className="col-8 bg-success py-2" style={{ height: "60vh" }}>

          <div className="d-flex back" style={{ height: "33%", backgroundImage: `url(${stato.meals[user].img})` }}
            onClick={handleShow}> 
          </div>

          <Modal className="d-flex justify-content-center align-items-center" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>

            <Modal.Body className="d-flex justify-content-center">
              <img src={stato.meals[user].img} className="img-fluid" />
            </Modal.Body>
          </Modal>

          <h3 className="righteous my-2"> 
            {stato.meals[user].name} 
            <FontAwesomeIcon className="mx-2" icon={ stato.meals[user].icon } />
          </h3>

          <h5> {stato.meals[user].desc} </h5>
          <p className="meno" style={{ overflowY: "scroll", height: "45%" }}> {stato.meals[user].text} </p>
        </div>
      </div>



    </div>
  )
}

export default Quarto;