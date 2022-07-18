import React from 'react'
import appIcon from "../../assets/appicon.png"
function Reportmodal(props) {

    const submitReport= async ()=>{
      const url="http://127.0.0.1:8000/api/v1/submitreport"
      let tokken=localStorage.getItem('tokken');
            const payload = {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': "Bearer " + tokken
                           },
                body: JSON.stringify({ "BillId":props.id})
            };
            let data=await fetch(url,payload);
            if(data.status===201 || data.staus==="ok"){
                console.log("Reported")
            }
            else{
                   alert(data.status+" Please try again")  
         
            }
    }

    const handleReport=()=>{
        console.log(`This bill is reported ${props.id}`)
        submitReport();
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
