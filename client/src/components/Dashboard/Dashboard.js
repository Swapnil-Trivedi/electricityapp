import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Briefbar from './Briefbar';

function Dashboard() {
  return (
    <>
    {document.title=`E-Bill Dashboard`}
    <Navbar/>
    <Sidebar/>  
    <Briefbar/>  
    </>
  )
}

export default Dashboard
