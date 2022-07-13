import React from 'react'
import dummyUser from "../../assets/dummyUser.png";

function Detailcard(props) {
    const {data}=props
    console.log(data)
  return (
<div className="card mb-3 my-3 mx-3" style={{maxWidth:"700px", margin:"100px"}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={dummyUser} className="card-img" alt={dummyUser}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h4 className="card-title">E-Bill Pvt Ltd. Account Card</h4>
        <hr />
        <div className="container">
            <div className="row mx-2 my-2">
            <i className="fa-solid fa-map-location-dot mx-2 my-2"></i>
            <p className="card-text">&ensp; {data.Address} <br />&ensp; {data.City} {data.Pincode}<br />&ensp; {data.State}</p>
            </div>
            <div className="row mx-2 my-2">
            <p className="card-text"><i className="fa-solid fa-phone mx-2"></i>  +91-{data.Mobile}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Detailcard

Detailcard.defaultProps={
    data:{
        Address: "None",
        City: "None",
        Pincode: "None",
        State: "None"
    }
}