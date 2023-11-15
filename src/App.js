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

function App() {

  function Sees(){
    let stato = useStato()
    let dispatch = useStatodis()
  }

  return (
    <div>

      <Task>
        <Sees/>
      </Task>

      <Task>
      <Router>
        <Routes>
          <Route path="*" element={<Homepage/>} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </Router>
      </Task>

      <div className='position-fixed bg-secondary w-100 text-center'>
        Thsi is fondo
      </div>

    </div>
  );
}

export default App;
