import React from "react";
import appIcon from "../assets/appicon.png";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a
            className="navbar-brand d-flex"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <img className="mx-3" src={appIcon} alt="" width="40" height="30" />
            <h5>Plugged In</h5>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
