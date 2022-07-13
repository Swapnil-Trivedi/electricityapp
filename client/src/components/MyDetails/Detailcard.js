import React from 'react'
import dummyUser from "../../assets/dummyUser.png";

function Detailcard() {
  return (
<div class="card mb-3 my-3 mx-3" style={{maxWidth:"700px", margin:"100px"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={dummyUser} class="card-img" alt={dummyUser}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h4 class="card-title">E-Bill Pvt Ltd. Account Card</h4>
        <hr />
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Detailcard
