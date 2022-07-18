import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Briefbar from './Briefbar';

function Dashboard() {
  const [data,setData]=useState(0);
  const getData=async()=>{
    const ReportUrl="http://127.0.0.1:8000/api/v1/countactive"
    const BillUrl="http://127.0.0.1:8000/api/v1/unpaidbill"
    const ChartUrl="http://127.0.0.1:8000/api/v1/chartdata"
    let tokken=localStorage.getItem('tokken');
    const payload={
      method: 'GET',
      headers: {
      Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + tokken
               },
      }
    let Rdata=await fetch(ReportUrl,payload)
    let Bdata=await fetch(BillUrl,payload)
    let Cdata=await fetch(ChartUrl,payload)
    setData({reportdata:await Rdata.json(),billData:await Bdata.json(),chartData: await Cdata.json()})
    console.log(data)
  }
  useEffect(()=>{
    getData();
  },[])
   

  return (
    <>
    {document.title=`E-Bill Dashboard`}
    <Navbar/>
    <Sidebar/>  
    {data!==0?<Briefbar pdata={data}/>:""} 
    </>
  )
}

export default Dashboard
