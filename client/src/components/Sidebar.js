import React from "react";

function Sidebar() {
  return (
    <>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{marginTop:"58px",maxWidth: "250px"}}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Menu
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
                <ul className="sidebar-item"><i className="fa fa-chalkboard mx-3 my-2"></i>  Dashboard </ul>
                <ul className="sidebar-item"><i className="fa-solid fa-user-check mx-3 my-2"></i>  My Details</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
