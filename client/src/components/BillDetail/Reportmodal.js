import React from 'react'
import appIcon from "../../assets/appicon.png"
function Reportmodal(props) {

    const handleReport=()=>{
        console.log(`This bill is reported ${props.id}`)
    }


  return (
    <>
    <div className="modal fade " id="Reportmodal"  data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel"><img className="mx-3" src={appIcon} alt="LOL" style={{width:"58px",height:"48px"}} />  E-Bill Systems Pvt Ltd </h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <h6>Acknowledgement</h6>
        Dear Customer,
        <br />
        Your Bill id <b>CXASS-{props.id}</b> will be sent back to your city office for re-verification. An appointment schedule with the onsite engineer will be shared to your registered mobile number if any fault is found during verification to ensure no faulty device is installed.
        <br />
        Your reports will be shared under My Reports section.
        <br />
        <h6>
            <br />
        Thank You,
        <br />
        E-BILL Services
        </h6>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Decline</button>
        <button className="btn btn-success" data-bs-dismiss="modal" onClick={handleReport}>Report</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Reportmodal
