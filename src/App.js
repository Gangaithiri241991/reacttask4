import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Create from "./journey/studentsjourney/create";
import Manage from "./journey/studentsjourney/manage";
import StudentsJourney from "./journey/studentsjourney/index";
import MentorsJourney from "./journey/mentorsjourney/index";
import Createm from "./journey/mentorsjourney/createm";
import Managem from "./journey/mentorsjourney/managem";
import Creates from "./journey/sessionjourney/creates";


function App() {
  
  return (
    <div className="App">
    <div id="zen-landing-page-container" className="app-container">
      <div
        id="zen-content-area-container"
        className="zen-content-area-container"
      >
        <div id="zen-sidebar" className="zen-sidebar">
          <div className="sidebar-header-branding">
          <img
              className="brand-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6N7vPdnnaAP3EwZWscwG-JqEz1iX-gpTSR0QjHw5jA&s"
              alt="Zen-class-logo"
            />
            Zen Classes
          </div>
          <nav className="zen-sidebar-nav" id="zen-sidebar-nav">
            <ul>
              <li>
                <Link to ="/students">Students</Link>
                
                
              </li>
              
                <li>
                  <Link to="/mentor"> mentor journey</Link>
                </li>
            
              <li>
                <Link to ="/sess" > sessionjourney</Link></li>
             
            </ul>
          </nav>
        </div>
        <div id="zen-content-area" className="zen-content-area">
          <Routes>
          <Route path="students" Component={StudentsJourney} >
              <Route path="creates" Component={Create} />
              <Route path="manages" Component={Manage} />
              </Route>
              <Route path="mentor" Component={MentorsJourney} >
              <Route path="createm" Component={Createm} />
              <Route path="managem" Component={Managem} />
              </Route>
             <Route path="sess" Component={Creates}>

             </Route>
          </Routes>
        </div>

      </div>
    </div>
    </div>
  );
}

export default App;