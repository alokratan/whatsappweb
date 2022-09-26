import React from 'react'
import './App.css';
import profile from './alok.png';
import {MdOutlineEmojiEmotions,MdOutlineMic} from 'react-icons/md';
import {TbDotsVertical}  from 'react-icons/tb';

import {chat,chat2} from './dbs2'
import { RiAttachment2 } from 'react-icons/ri';
function Chatting() {
  return (
    <div>
        
<div className="right2">
  

<div className="right-top2">
  <div className="dpnam">
  <img src={profile} width="40px" height="40px" alt="dp" />
  <div className="nametype">
  <h3>Alok Ratan Gautam</h3>
  <h6>Typing...</h6>
  </div>

  </div>
<div className="attmenu">
{/* <GrAttachment className='status'/> */}
<RiAttachment2 className='status'/>
<TbDotsVertical className='status'/>
</div>
 
  </div>
  <div className="chatt">
    <div className="chattleft">
 {chat.map((item)=>(
  <h1>
      <span>
      {item.text}
      </span>
      </h1>

 ))}
      
    </div>
    <div className="chattright">
    {chat2.map((item)=>(
  <h1>
      <span>
      {item.text}
      </span>
      </h1>

 ))}
    </div>
   
  </div>

  <div className="right-bottom">
<div className="emoji"><MdOutlineEmojiEmotions className='emojiicon'/></div>
<div> <input type="text" className='msginput' placeholder='Message' autoFocus/> </div>
<div className="emoji"><MdOutlineMic className='emojiicon'/></div>
</div>
</div>
</div>
  )
}

export default Chatting