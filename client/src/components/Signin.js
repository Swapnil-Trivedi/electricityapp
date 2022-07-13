import React, {useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import appIcon from '../assets/appicon.png';
function Signin() {

  const [username,setUser]=useState(null);
  const [password,setPass]=useState(null);  
  let history=useNavigate();  
  const handleSubmit=(event)=>{
    event.preventDefault();
    setUser(event.target.user.value);
    setPass(event.target.pass.value);
  }

  useEffect(()=>{
    if(username!==null && password!==null)
        getToken();
  })

  const getToken=async()=>{
            const url="http://127.0.0.1:8000/api/token/"
            const payload = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "username":username,"password":password})
            };
            let data=await fetch(url,payload);
            if(data.status===200 || data.staus==="ok"){
                let parsedData=await data.json();
                    localStorage.setItem('refresh',parsedData['refresh']);
                    localStorage.setItem('tokken',parsedData['access']);
                    console.log("token set succesfully");
                    history("/Dashboard");
            }
            else{
                   alert(data.status+" Please try again")  
         
            }
  }


  return (
    <>
    <div className='container text-center' style={{marginTop:"150px",width:"300px"}}>
        <form className="form-signin" onSubmit={handleSubmit}>
      <img className="mb-4" src={appIcon} alt="" width="72" height="72"/>
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label htmlFor="inputUser"  className="sr-only">Username</label>
      <input type="username"  name="user" id="inputUser" className="form-control my-2" placeholder="Username" required autoFocus/>
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input type="password"  name="pass" id="inputPassword"  className="form-control my-3" placeholder="Password" required/>
      <button className="btn btn-lg btn-primary btn-block" type="submit" >Sign in</button>
      <p className="mt-5 mb-3 text-muted">&copy; Made with Luv Swapnil@2022</p>
    </form>
    </div>
    </>
  )
}

export default Signin
