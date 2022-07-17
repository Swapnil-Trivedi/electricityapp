import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Signin from "./components/Signin";
import Mydetails from "./components/MyDetails/Mydetails";
import BillDashboard from "./components/BillDetail/BillDashboard";
import ReportDashboard from "./components/ReportsDetail/ReportDashboard";

function App() {
  return (
    <> 
    <Router>
    <div className="container">
      <Routes>

        <Route exact path="/" element={<Signin/>}/>
        <Route exact path="/Dashboard" element={<Dashboard/>}/>
        <Route exact path="/BillDashboard" element={<BillDashboard/>}/>
        <Route exact path="/MyDetails" element={<Mydetails/>}/>
        <Route exact path="/MyReports" element={<ReportDashboard/>}/>
        

      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
