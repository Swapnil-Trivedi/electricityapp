import React from "react";
import Table from "./Table";

function BillTable(props) {
    let data=[]
    if(props.data!==null){
        data=props.data
    }
  return (
    <>
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row">
          <div className="col-12">
            <h2>All your Electricaity Bills are listed down below</h2>
            <hr />
          </div>
          <Table data={data}/>
        </div>
      </div>
    </>
  );
}

export default BillTable;
