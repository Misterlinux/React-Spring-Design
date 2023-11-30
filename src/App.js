import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Task, { useStato, useStatodis } from "./components/Context"
import 'bootstrap/dist/css/bootstrap.css';
import "./Global.scss"
import "./App.css"

import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import Values from "./components/Values";
import Testers from "./components/Tester";
import Footer from "./components/Footer";

function App() {

  function Sees(){
    let stato = useStato()
    let dispatch = useStatodis()
  }

  function Navbar(){

    return (
      <div className="d-flex justify-content-center">
        <div
          className="position-absolute taglia bg-secondary px-4 py-2 container-fluid row mx-0"
        >
          <Link to="/" className="col-4">
            <div className="text-success text-center">
              Home
            </div>
          </Link>
          <Link to="/testimonials" className="col-4 border-end border-start border-success border-1">
            <div className="text-success text-center">
              Patners
            </div>
          </Link>
          <Link to="/contact" className="col-4">
            <div className="text-success text-center">
              Contact
            </div>
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div>

      <Task>
      <Router>
        <Navbar />

        <Routes>
          <Route path="*" element={<Homepage/>} />
          <Route path="contact/*" element={<Contact />} />
          <Route path="testimonials/*" element={<Testers />} />
          <Route path="values/*" element={<Values />} />
        </Routes>

        <Footer />
      </Router>
      </Task>

    </div>
  );
}

export default App;
