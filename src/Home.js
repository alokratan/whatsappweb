import React from 'react'
import './App.css';

import {MdLock} from 'react-icons/md';

function Home() {
  return (
    <div>
        
<div className="right">

<div className="right-top">
  
  </div>
<div className="rightmid">
{/* <img src={imgs} alt="img"  width="400px" height="300px"/> */}
<div className="rightmidimg"></div>
<div className="keep">
                <h2>WhatsApp Web
                  </h2>
            </div>
            <div className="keep2">
                <p>
                Send and receive messages without keeping your phone online.
                <br/>
                Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
                   </p>  
            </div>
            <div className="keep3">
                <p>
                <span>
                <MdLock/> 
                  </span>End-to-end encrypted</p>  
            </div>

</div>
<div className="bottomcolor">
  
</div>
</div>



    </div>
  )
}

export default Home