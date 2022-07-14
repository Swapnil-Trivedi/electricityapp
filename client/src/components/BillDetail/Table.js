import React, { useState } from 'react'
import Viewbill from "./Viewbill";
function Table(props) {
    let data=[]
    const [modalData,setModal]=useState(null);
    const handleView=(ele)=>{
        setModal(ele);
    }
    
    if(props.data!==null)
        data=props.data;
  return (
    <>
    {modalData && <Viewbill data={modalData}/>}
    <div className="col-12 mx-2 my-3">
            <table className="table table-hover table-striped">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Bill ID</th>
                  <th scope="col">Generation Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
          {
            data.map((ele)=>{
                return <tr key={ele.id}>
                <td>CXAAS-{ele.id}</td>
                <td>{ele.BillGenDate}</td>
                <td>&#8377; {ele.Amount}</td>
                <td>{ele.Paid===true?<i className="fa-solid fa-circle-check" data-toggle="tooltip" data-placement="top" title="Paid"></i>:<i className="fa-solid fa-triangle-exclamation" data-toggle="tooltip" data-placement="top" title="Unpaid"></i>}</td>
                <td>
                <i className="fa-solid fa-eye mx-2" data-toggle="tooltip" data-placement="top" title="View" data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>{handleView(ele)}}></i>
                {!ele.Paid?<i className="fa-solid fa-file-invoice-dollar mx-2" data-toggle="tooltip" data-placement="top" title="Payment"></i>:""}
                <i className="fa-solid fa-download mx-2" data-toggle="tooltip" data-placement="top" title="Download Bill"></i>
                <i className="fa-solid fa-plug-circle-exclamation mx-2" data-toggle="tooltip" data-placement="top" title="Report Bill"></i>
                </td>
              </tr>
            })
          }
          </tbody>
          </table>
          </div>
    </>
  )
}

export default Table
