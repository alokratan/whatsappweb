
import './App.css';
import { data } from './dbs';
import imgs from './keep.png';
import search from './search.svg';
import profile from './sidd.jpg';
import {MdLock,MdMessage,MdOutlineFilterList} from 'react-icons/md';
import {TbCircleDashed,TbDotsVertical} from 'react-icons/tb';


function App() {
  return (
   <>
 <div className="background">
<div className="left">

<div className="left-top">
<img src={profile} alt="dp" />
<div className="menu">
<TbCircleDashed className='status'/>
<MdMessage className='status'/>
<TbDotsVertical className='status'/>
</div>
</div>
<div className="searchbox">

  <div className="searchandinput">
  <img src={search} alt="" />
  <input type="text" placeholder="Search or start new chat" />
  </div>


<div className="filter">

<MdOutlineFilterList className='filtericon'/>
</div>
</div>


<div className="container">



{
  data.map((item)=>(
    <>
    
<div className="chat">

<div className="dpandbox">
<div className="dp">
  <img src={item.img} alt="alok" />
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

<div className="right">

<div className="right-top">
  
  </div>
<div className="rightmid">
<img src={imgs} alt="img"  width="400px" height="300px"/>

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
   </>
  );
}

export default App;
