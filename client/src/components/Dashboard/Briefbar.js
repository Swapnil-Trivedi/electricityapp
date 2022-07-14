import React from "react";

function Briefbar() {
  return (
    <>
      <div className="container my-4">
        <div className="row" style={{marginTop:"75px"}}>
          <div className="col-4 mx-2 my-3" style={{border:"solid"}}>
            <h1>Card 1</h1>
          </div>
          <div className="col-4 mx-2 my-3" style={{border:"solid"}}>
            <h1>Card 2</h1>
          </div>
          <div className="col-3 mx-2 my-3" style={{border:"solid"}}>
            <h1>Card 3</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Briefbar;
