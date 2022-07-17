import React from 'react'
import appIcon from "../../assets/appicon.png"
function Viewmodal(props) {
    if(props.data===null)
        return null
    else {
        let data=props.data;
  return (
    <>
    <div className="modal fade" id="viewreport" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title" id="exampleModalLongTitle"><img className="mx-3" src={appIcon} alt="LOL" style={{width:"58px",height:"48px"}} />  E-Bill Systems Pvt Ltd </h4>
      </div>
      <div className="modal-body">
        <h6>Mr.{" "+data.User[0].first_name+" "+data.User[0].last_name}</h6>
        <br />
        {!data.Status? <p> Your request is under review. Please wait for some time.</p>:
         
         <p>
            <p>We reviewed your application for the bill id CXASS-{data.Bill[0].id}, with the detials as mentioned below</p>
        <hr />
        <p><i className="fa-solid fa-id-badge mx-3"></i> <b> Bill Id : </b> CXAAS-{data.Bill[0].id} &nbsp; &nbsp; &nbsp;<i className="fa-solid fa-sack-dollar mx-3"></i> <b> Amount : &#8377; </b> {data.Bill[0].Amount}</p>
        <b>{data.Bill[0].Paid?<p><i className="fa-solid fa-circle-check mx-3"></i> Payment completed</p>:<p><i className="fa-solid fa-triangle-exclamation mx-3"></i> Pending payment</p> }</b>
        <p><i className="fa-solid fa-calendar-days mx-3"></i> <b>From : </b>{data.Bill[0].BillGenDate} &nbsp; &nbsp; <b> To : </b>{data.Bill[0].BillDueDate}</p>
        <p><i className="fa-solid fa-bolt-lightning mx-3"></i> <b>Total power units consumed :</b> {data.Bill[0].Unit}</p>
        <hr />
        <p>After careful consideration and examination the remarks are added by our engineers.</p>
        <br />
        <b>Remarks :</b>
        <br />
        <p>{data.Remarks}</p>
        <br />
        <b>Thanks and Regards <br /> Team E-Bill </b>
         </p>
        
        }
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
export default Viewmodal
