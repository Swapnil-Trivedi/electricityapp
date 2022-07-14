import React from "react";
import TableItem from "./TableItem";

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
          <div className="col-12 mx-2 my-3">
            <table className="table table-hover table-striped">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Bill Number</th>
                  <th scope="col">Generation Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
          {
            data.map((ele)=>{
                return <TableItem key={ele.id} data={ele} />
            })
          }
          </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default BillTable;
