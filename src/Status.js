import React from 'react'
import Jsondata from './Jsondata.json';

function Status() {
  return (
    <div className="whatsappstatus">

      <div className="whatsappstatusheader">
        <h4>WHATSAPP STATUS</h4>
      </div>
   
<div className="statusback">
{
        Jsondata.map((item)=>(

            <div className="statusmain">
            <img src={item.postimg} className="statusimg" alt="dp" />
            <div className="bottomstatus">
              <div className="bottomstatusimgbox">
              <img src={item.img} className="bottomstatusimg" alt="dp" />
              </div>
              <div className="bottomstatusnamebox">
                <h4>{item.name}</h4>
              </div>
            </div>
            </div>
        )).reverse().slice(1,17)
     }
</div>
    
    
    </div>
  )
}

export default Status