import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

  let navigate=useNavigate();
  const handleSignout=()=>{
    localStorage.clear();
    console.log("Cleared everything loggin out");
    navigate("/");
  }

  return (
    <>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{marginTop:"60px",maxWidth: "250px"}}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Menu
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
          <Link to="/Dashboard"><ul className="sidebar-item" data-bs-dismiss="offcanvas"><i className="fa fa-chalkboard mx-3 my-2"></i>  Dashboard </ul></Link>
          <Link to="/BillDashboard"><ul className="sidebar-item" data-bs-dismiss="offcanvas"><i className="fa-solid fa-file-lines mx-3 my-2"></i>  My Bills </ul></Link>
          <Link to="/MyReports"><ul className="sidebar-item" data-bs-dismiss="offcanvas"><i class="fa-solid fa-list-check mx-3 my-2"></i>My Reports</ul></Link>
          <Link to="/MyDetails"><ul className="sidebar-item" data-bs-dismiss="offcanvas"><i className="fa-solid fa-user-check mx-3 my-2"></i>  My Details </ul></Link>
          <hr />
          <ul className="sidebar-item" data-bs-dismiss="offcanvas" onClick={handleSignout}><i className="fa-solid fa-power-off mx-3 my-2"></i>  Sign Out</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;