import { useState } from "react";
import Task, { useStato } from './Context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-bootstrap/Modal';

function Quarto(){

  //I guess we can't use percentage if we want the content to be overflow limited
  let stato = useStato()
  
  let [user, setUser] = useState(0)

  function reading(index){
    setUser(index)
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
      
      <h1 className="righteous text-center text-danger pt-4"> 
        Our Menu 
      </h1>

      <div className="row mx-0 justify-content-center" style={{ height: "60vh" }}>
        <div className="col-4 col-md-2 p-0 d-flex flex-column noscroller" style={{ overflowY: "scroll", height: "inherit" }}>
        
          {stato.meals.map((cont, index)=>(

            <div className={`${(index == user) ? "bg-success" : "bg-danger"} p-2 d-flex align-items-start justify-content-center flex-column border-success border-bottom border-1`}
              onClick={()=>( reading(index) )}
              style={{ height: "20vh" }} key={index}>
            

              <div className="row mx-0 mb-2 d-flex align-items-center">
                <div className="p-0 d-flex align-items-center">
                  <FontAwesomeIcon className="mx-1" icon={ cont.icon } />
                  <p className="m-0 ms-1 righteous"> {cont.name} </p>
                </div>
              </div>

              <p style={{ overflow: "hidden" }}><b> {cont.desc} </b></p>

            </div>
          ))
          }

        </div>
        <div className="col-8 col-md-7 bg-success py-2" style={{ height: "60vh" }}>

          <div className="d-none d-md-flex mx-0 " style={{height: "inherit"}}>
            <div className="col-5">
              <div className="d-flex back" style={{ height: "95%", backgroundImage: `url(${stato.meals[user].img})` }}> 
              </div>
            </div>
            <div className="col-7 px-3">
              
              <h3 className="righteous my-2"> 
                {stato.meals[user].name} 
                <FontAwesomeIcon className="mx-2" icon={ stato.meals[user].icon } />
              </h3>

              <h5> {stato.meals[user].desc} </h5>
              <p className="meno" > {stato.meals[user].text} </p>
              
            </div>
          </div>

          <div className="d-sm-block d-md-none" style={{height: "inherit"}}>
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

            <p className="righteous"><b>{stato.meals[user].desc} </b></p>
            <p className="meno"> {stato.meals[user].text} </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Quarto;