import React from 'react'
import dark from './Darkm.js'
import  Jsondata  from './Jsondata.json';
// import profile from './sidd.jpg';
import {MdMessage,MdOutlineFilterList} from 'react-icons/md';
import {TbDotsVertical} from 'react-icons/tb';
import {GiFlowerEmblem} from 'react-icons/gi';
import {BsCircleHalf} from 'react-icons/bs';
import {MdOutlineSearch} from 'react-icons/md';
import { useState } from 'react';
import Home from './Home';
import Chatting from './Chatting';
import Post from './Post';
import Status from './Status';



function Chat() {
    const [chating,setchating]=useState(<Home/>);
    const [filter,setfilter]=useState("");
  console.log(filter);  
    function abc(event){
      setchating(<Chatting/>)
      event.stopPropagation()
      console.log("page call");
    }
    function dpclick(event,id){
      event.stopPropagation()
    
    }
    function post(){
      setchating(<Post/>)
    }
    function message(){
      setchating(<Chatting/>)
    }
    function status(){
      setchating(<Status/>)
    }
    function menu(){
      const abc=document.getElementsByClassName('list')
      abc[0].classList.toggle('list2')
      const abcd=document.getElementsByClassName('left-top')
      abcd[0].classList.toggle('left-top12')
      const abc2=document.getElementsByClassName('status')
      abc2[3].classList.toggle('statuscros')

    }
 
  return (
    <>
<div className="background2">

<h4>PLEASE USE LANDSCAPE OR DESKTOP MODE ONLY...</h4>

</div>
    <div className="background">
   <div className="left">
   
   <div className="left-top">

   <div className="lefttopimg">
    
   </div>
   
   <div className="menu">
   <button onClick={post}>POST</button>
   <GiFlowerEmblem onClick={status} className='status'/>
   <MdMessage onClick={message} className='status'/>
   <BsCircleHalf onClick={dark} className='status' id='icon'/>
   <TbDotsVertical onClick={menu} className='status'/>
   
   </div>
 
   </div>
   <div className="list">
    <ul>
      <li>New group</li>
      <li>New broadcast</li>
      <li>Linked devices</li>
      <li>Starred messages</li>
      <li>Payments</li>
      <li>Settings</li>
    </ul>
   </div>
   <div className="searchbox">
   
     <div className="searchandinput">
    
     <MdOutlineSearch className='filtericon'/>

     <input type="text" placeholder="Search or start new chat" onChange={(e)=>setfilter(e.target.value)} />
     </div>
   
   
   <div className="filter">
   
   <MdOutlineFilterList className='filtericon'/>
   </div>
   </div>
   
   
   <div className="container"> 
   { 
     Jsondata.filter((item)=>{
      if(filter===""){
        return item
      }
      else if(item.name.toLowerCase().includes(filter.toLowerCase())){
        return item
      }      
        return false;
     }).map((item,id)=>(
       <>
       
   <div onClick={abc} key={id} className="chat">
   
   <div className="dpandbox">
   <div onClick={dpclick}  className="dp">
     <img src={item.img} className="dpimg" alt="profile click" />
   </div>
   
   <div className="namebox">
     <div className="name">
     <h4>{item.name} 
   
       </h4>
       </div> 
     <div className="msg">
       <h5>
       {item.msg}
       </h5>
       
       </div> 
   
   </div>
   
   </div>
   
   
   <div className="timing">
   <div className="date"><h6>{item.time}</h6></div>
   <div className="msgcount"><p>{item.msgunread}</p></div>
   </div>
   
   </div>
   
       </>
     ))
   }
   </div>
   
   
   
   </div>
{chating}
    </div>
      </>
  )
}

export default Chat