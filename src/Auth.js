import React from 'react'
import { useState,useEffect } from 'react';
import {key} from './dbs2';
function Auth() {
    
const [pass,setpass]=useState("");

function subm(){
  let a=parseInt(pass);
  if(a===key){
    const close=document.querySelector('.popmain');
    close.style.display="none";
  }
  else{
alert("Password is not Correct .... try again")
  }
 
}


useEffect(() => {
  const popup=document.querySelector('.popmain');
  return () => {
  popup.style.display="flex"; 
  }
}, [])


  return (
    <>

<div className="popmain">
  <div className="popup">
   
    <div className="pophead">
      <h4>WHATSAPP WEB</h4>
    </div>
    <form onSubmit={subm} action='#'>
    <div className="poplaptop">
      <div className="windowpop">
        <h6>Enter Whatsapp PIN</h6>
        <input type="password" pattern="[1-9].{5,5}" onChange={(e)=>setpass(e.target.value)} title="PIN must be six digit only,(numbers)" required autoFocus />
      </div>
    </div>
    <div className="popbottom">
      <button type="submit">LOGIN</button>
    </div>
    </form>
    
  </div>
  </div>

    </>
  )
}

export default Auth