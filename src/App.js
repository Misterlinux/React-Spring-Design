import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
  Routes,
  Outlet,
  useRouteError
} from "react-router-dom";
import Task, { useStato, useStatodis } from "./components/Context"
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import Homepage from "./components/Homepage";
import Secondo from "./components/Secondo";
import Terzo from "./components/Terzo";
import Contact from "./components/Contact";
import "./Global.scss"
import Footer from "./components/Footer";
import Values from "./components/Values";
import Testers from "./components/Tester";

function App() {

  function Sees(){
    let stato = useStato()
    let dispatch = useStatodis()
  }

  function Navbar(){

    return( 
      <div className="d-flex justify-content-center">

      <div className="position-absolute taglia d-flex bg-secondary justify-content-around w-50 px-4 py-2" style={{ zIndex: 2 }}>
        <Link to="/">
          <div className="text-success">Home</div>
        </Link>
        <div className="text-success">Menu</div>
        <Link to="contact"> 
          <div className="text-success">Contact me</div>
        </Link>
      </div>

      </div>
    )
  }

  return (
    <div>

      <Task>
        <Sees/>
      </Task>

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
