import React, { useState } from 'react'
import Jsondata from './Jsondata.json';
import { TbDotsVertical } from 'react-icons/tb';
import {HiOutlineShare} from 'react-icons/hi';
import {FiDownload} from 'react-icons/fi';
import {RiHeartFill, RiHeartLine} from 'react-icons/ri';
import {RiDislikeLine,RiDislikeFill} from 'react-icons/ri';

function Post() {
 const [likestate,setlikestate]= useState(<RiHeartLine onClick={likee}  className='download' />);
 const [dislikestate,setdislikestate]= useState(<RiDislikeLine onClick={dislikee} className='download' />);

 function likee(){
  setlikestate(<RiHeartFill onClick={likee} className='download2' />)
  setdislikestate(<RiDislikeLine onClick={dislikee} className='download' />)
  
 }
 

 function dislikee(){
  setdislikestate(<RiDislikeFill onClick={dislikee} className='download' />)
  setlikestate(<RiHeartLine onClick={likee} className='download'/>)
 
 }

  return (
    <div className="right2">

      <div className="right-top3">
        <h4>WHATSAPP POSTS</h4>
      </div>
      <div className="postmain">
{
  Jsondata.map((item)=>(

    <div className="postitem">
    <div className="postheader">
      <div className="left-top2">
        <div className="abc">
          <img src={item.img} alt="dp" />
          <div className="nametime">
            <h4>{item.name}</h4>
            <p>{item.date}</p>
          </div>
        </div>
        <div className="menu2">
          <TbDotsVertical className='threedot' />
        </div>
      </div>
    </div>
    <div className="postcontent">  <img src={item.postimg} className="postimgs" alt="dp" /></div>
    <div className="postfooter">
    <div className="ldbox">
    {likestate}
    {/* <span>Like</span> */}
    </div>
    <div className="ldbox">
    {dislikestate}
    </div>
    <div className="ldbox">
    <input type="text" placeholder='Comment'/>
    </div>
    <div className="ldbox">
    <HiOutlineShare className='download' />
   
    </div>
    <div className="ldbox">
    <FiDownload className='download' />
    
    </div>
    </div>
  </div>
  
  ))
}

        
          

      
      </div>
    </div>
  )
}

export default Post