import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Detailcard from "./Detailcard";

function Mydetails() {

  
  return (
    <>
    <div className="container">
      <div className="row">
          <div className="col-12"><Navbar /><Sidebar /></div>
      </div>
      <div className="row" style={{marginLeft:"20%", marginTop:"5%"}}>
        <div className="col-12 align-items-center"><Detailcard/></div>
      </div>
    </div>
      

      
    </>
  );
}

export default Mydetails;
