import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Detailcard from "./Detailcard";

function Mydetails() {

  const [data,setData]=useState(null);
  const getUserData=async ()=>{
    const url="http://127.0.0.1:8000/api/v1/userdetail"
    let tokken=localStorage.getItem('tokken');
    const payload={
      method: 'GET',
      headers: {
      Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + tokken
               },
      }
    let data=await fetch(url,payload)
    if(data.status===200|| data.staus==="ok"){
      let parsedData=await data.json();
      setData(parsedData)
    }
  }

  useEffect(()=>{
    if(data===null)
      getUserData();
  },[data])
  return (
    <>
    <div className="container">
      <div className="row">
          <div className="col-12"><Navbar /><Sidebar /></div>
      </div>
      <div className="row" style={{marginLeft:"20%", marginTop:"5%"}}>
        {data && <div className="col-12"><Detailcard data={data}/></div>}
      </div>
    </div>
      

      
    </>
  );
}

export default Mydetails;
