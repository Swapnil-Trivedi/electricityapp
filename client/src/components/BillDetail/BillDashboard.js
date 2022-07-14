import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from "../Sidebar"
import BillTable from './BillTable'

function BillDashboard() {
  const[billData,setBillData]=useState([])
  const getUserBill=async ()=>{
    const url="http://localhost:8000/api/v1/bill"
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
      setBillData(parsedData)
    }
    else{
      alert(data.status);
    }
  }

  useEffect(()=>{
      getUserBill();
  },[billData])

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className="container mx-3 my-3">
    <BillTable data={billData.length===0?[]:billData}/>
    </div>
    </>
  )
}

export default BillDashboard        