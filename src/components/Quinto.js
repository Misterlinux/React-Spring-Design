import Task, { useStato, useStatodis } from './Context';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

import Carousel from 'react-bootstrap/Carousel';

function Quinto(){

  let stato = useStato()

  return(
    <div>

      <h1 className="text-center text-secondary righteous pt-4">
        Our Testimonials
      </h1>

      <div className="d-flex justify-content-center">

        <Carousel className="py-3 col-12 col-md-9 bg-secondary ">
          {stato.people.map((cont, index)=>(

            <Carousel.Item key={index} interval={20000}>
              <Link to="testimonials" style={{ textDecoration: "none" }}>
              <div className="row mx-0 d-flex align-items-center">

                <div className="col-4 d-flex flex-column align-items-center">
                  <img src={cont.photo} className="img-fluid border border-primary border-2" />
                  <div className="text-center text-success">
                    <p>{cont.job}</p>
                  </div>
                </div>

                <div className="col-8 col-md-7 text-danger d-flex flex-column justify-content-center p-0" 
                  style={{ height: "32vh" }}>
                  <h3> {cont.name} </h3>
                  <p className="text-success modaltext" style={{ height: "25vh" , overflowY: "scroll" }}>
                    {cont.text}
                  </p>
                </div>

              </div>
              </Link>

              <br />
            </Carousel.Item>
          ))}
        </Carousel>

      </div>

    </div>
  )
}

export default Quinto;