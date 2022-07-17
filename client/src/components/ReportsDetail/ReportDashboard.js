import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from "../Sidebar"
import ReportTable from "./ReportTable"

function ReportDashboard() {

    const [reportData,setReport]=useState([]);

    const getUserReports=async ()=>{
        const url="http://localhost:8000/api/v1/reports"
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
          setReport(parsedData)
        }
        else{
          alert(data.status);
        }
      }

      useEffect(()=>{
            getUserReports();
      },[])

  return (
    <>
    {document.title=`My Reports`}
    <Navbar/>
    <Sidebar/>
    <div className="container mx-3 my-3">
    <ReportTable data={reportData.length===0?[]:reportData}/>
    </div>
    </>
  )
}

export default ReportDashboard
