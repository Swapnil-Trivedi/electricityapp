import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Briefbar from "./components/Briefbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Signin from "./components/Signin";

function App() {
  return (
    <> 
    <Router>
    <div className="container">
      <Routes>

        <Route exact path="/" element={<Signin/>}/>
        <Route exact path="/home" element={<Briefbar />}/>

      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
