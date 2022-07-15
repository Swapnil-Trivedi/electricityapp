import React, { useRef } from 'react'
import appIcon from "../../assets/appicon.png"
import Reportmodal from './Reportmodal';
function Viewbill(props) {
  const reportmodal=useRef(null);
    if(props.data===null)
        return null
    else {

      
        let data=props.data;

        const handleReport=(id)=>{
          console.log(`This Bill is to be reported Id : ${id}`)
          reportmodal.current.click()
        } 

  return (
    <>
    <button ref={reportmodal} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#Reportmodal">
  Launch demo modal
</button>

    <Reportmodal id={data.id}/>
    <div className="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title" id="exampleModalLongTitle"><img className="mx-3" src={appIcon} alt="LOL" style={{width:"58px",height:"48px"}} />  E-Bill Systems Pvt Ltd </h4>
      </div>
      <div className="modal-body">
        <p><i className="fa-solid fa-id-badge mx-3"></i> <b> Bill Id : </b> CXAAS-{data.id} &nbsp; &nbsp; &nbsp;<i className="fa-solid fa-sack-dollar mx-3"></i> <b> Amount : &#8377; </b> {data.Amount}</p>
        <b>{data.Paid?<p><i className="fa-solid fa-circle-check mx-3"></i> Payment completed</p>:<p><i className="fa-solid fa-triangle-exclamation mx-3"></i> Pending payment</p> }</b>
        <p><i className="fa-solid fa-calendar-days mx-3"></i> <b>From : </b>{data.BillGenDate} &nbsp; &nbsp; <b> To : </b>{data.BillDueDate}</p>
        <p><i className="fa-solid fa-bolt-lightning mx-3"></i> <b>Total power units consumed :</b> {data.Unit}</p>
      </div>
      <div className="modal-footer">
      <button className="btn btn-dark" onClick={()=>{handleReport(data.id)}} ><i className="fa-solid fa-headset mx-2"></i> Report Bill</button>
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
}
export default Viewbill
