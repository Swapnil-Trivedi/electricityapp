import React, { useState,useRef} from 'react'
 import Viewmodal from "./Viewmodal";
function Table(props) {
    const viewmodal=useRef(null);
    const [data,setData]=useState(props.data);
    const [modalData,setModal]=useState(null);
    const handleView=(ele)=>{
        setModal(ele);
        viewmodal.current.click();
    }

    const handleDelete=async(id)=>{
      console.log(id)
      const url=`http://localhost:8000/api/v1/deletereport/${id}`
      let tokken=localStorage.getItem('tokken');
      const payload={
        method: 'DELETE',
        headers: {
        Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + tokken
                 },
        }
      let adata=await fetch(url,payload)
      console.log(adata)
      setData(data.filter(item=>{
        if(item.ReportId!==id)
          return item
      }))

    }
  

  return (
    <>
    {modalData && <Viewmodal data={modalData}/>}
    <button ref={viewmodal} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#viewreport">
  Launch demo modal
</button>
    {data.length===0?<p>No Available reports to display </p>:<div className="col-12 mx-2 my-3">
            <table className="table table-hover table-striped">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Report ID</th>
                  <th scope="col">Bill ID</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Payment Status</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
          {
            data.map((ele)=>{
                return <tr key={ele.ReportId}>
                <td>RXACS-{ele.ReportId}</td>
                <td>CXAAS-{ele.Bill[0].id}</td>
                <td>&#8377; {ele.Bill[0].Amount}</td>
                <td>{ele.Bill[0].Paid===true?<i className="fa-solid fa-circle-check" data-toggle="tooltip" data-placement="top" title="Paid"></i>:<i className="fa-solid fa-triangle-exclamation" data-toggle="tooltip" data-placement="top" title="Unpaid"></i>}</td>
                <td>{ele.Status===true?<p><i className="fa-solid fa-user-check mx-2 my-2"></i> Resolved</p> : <p><i className="fa-solid fa-clock mx-2 my-2"></i> Under Review</p> }</td>
                <td>
                <i className="fa-solid fa-eye mx-2" data-toggle="tooltip" data-placement="top" title="View" data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>{handleView(ele)}}></i>
                <i className="fa-solid fa-download mx-2" data-toggle="tooltip" data-placement="top" title="Download Bill"></i>
                <i className="fa-solid fa-trash-can mx-2" data-toggle="tooltip" data-placement="top" title="Delete Bill" onClick={()=>{handleDelete(ele.ReportId)}}></i>
                </td>
              </tr>
            })
          }
          </tbody>
          </table>
          </div>}
    </>
  )
}

export default Table
