import React from 'react'
import appIcon from "../../assets/appicon.png"
function Viewbill(props) {
    if(props.data===null)
        return null
    else {
        let data=props.data;
  return (
    <>
    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title" id="exampleModalLongTitle"><img className="mx-3" src={appIcon} alt="LOL" style={{width:"40px",height:"30px"}} />  E-Bill Systems Pvt Ltd </h4>
      </div>
      <div className="modal-body">
        <p><i class="fa-solid fa-id-badge mx-3"></i> <b> Bill Id : </b> CXAAS-{data.id} &nbsp; &nbsp; &nbsp;<i class="fa-solid fa-sack-dollar mx-3"></i> <b> Amount : &#8377; </b> {data.Amount}</p>
        {data.Paid?<p><i class="fa-solid fa-circle-check mx-3"></i> Payment completed</p>:<p><i class="fa-solid fa-triangle-exclamation mx-3"></i> Pending payment</p> }
        <p><i class="fa-solid fa-calendar-days mx-3"></i> <b>From : </b>{data.BillGenDate} &nbsp; &nbsp; <b> To : </b>{data.BillDueDate}</p>
        <p><i class="fa-solid fa-bolt-lightning mx-3"></i> Total power units consumed : {data.Unit}</p>
      </div>
      <div className="modal-footer">
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
