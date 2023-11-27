import React, { useEffect, useState } from 'react'
import "./ColumnsPriority.css"
import Card from '../card/Card'
import AnnouncementIcon from '@mui/icons-material/Announcement';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SignalCellularAlt1BarSharpIcon from '@mui/icons-material/SignalCellularAlt1BarSharp';
import SignalCellularAlt2BarSharpIcon from '@mui/icons-material/SignalCellularAlt2BarSharp';

function ColumnsPriority({kan, users, order, group}) {
    const [p0, setP0] = useState(0);
    const [p1, setP1] = useState(0);
    const [p2, setP2] = useState(0);
    const [p3, setP3] = useState(0);
    const [p4, setP4] = useState(0);
  
    useEffect(() => {
      let a = 0;
      let b = 0;
      let c = 0;
      let d = 0;
      let e = 0;
      for (let i = 0; i < kan.length; i++) {
        if (kan[i].priority===0) {
          a++;
        }
        else if(kan[i].priority===1) {
          b++;
        }
        else if(kan[i].priority===2) {
          c++;
        }
        else if(kan[i].priority===3) {
          d++;
        }
        else if(kan[i].priority===4) {
          e++;
        }
      }
      setP0(a);
      setP1(b);
      setP2(c);
      setP3(d);
      setP4(e);
    }, []);

  return (
    <div className="container-ColumnsPriority">
        <div className="container2">

<div className="cols">
    <div className="icons-1">
        <div className="priority-icon">
            <MoreHorizIcon color='action'/>
        </div>
        <div className='heading'>No Priority</div>
        <div className="entries">{p0}</div>
        <div className='heading-add'>+</div> 
        <div className="opt1">
            <MoreHorizIcon />
        </div>       
</div>
    {order === "Title" && <div>
        {kan.sort((a, b)=>a.title>b.title?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.priority===0?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
    {order === "Priority" && <div>
        {kan.sort((a, b)=>a.priority<b.priority?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.priority===0?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
</div>
<div className="cols">
  <div className='icons-1'>
  <div className="priority-icon">
    <AnnouncementIcon style={{ color: 'orange' }}/>
    </div>
    <div className='heading'>Urgent</div>
    <div className="entries">{p4}</div>
        <div className='heading-add'>+</div>  
        <div className="opt1">
            <MoreHorizIcon />
        </div>      
  </div>
    {order === "Title" && <div>
        {kan.sort((a, b)=>a.title>b.title?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.priority===4?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
    {order === "Priority" && <div>
        {kan.sort((a, b)=>a.priority<b.priority?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.priority===4?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
</div>
<div className="cols">
    <div className='icons-1'>
    <div className="priority-icon">
        <SignalCellularAltIcon color='action'/>
        </div>
        <div className='heading'>High</div>
        <div className="entries">{p3}</div>
        <div className='heading-add'>+</div>  
        <div className="opt1">
            <MoreHorizIcon />
        </div>      
    </div>
    {order === "Title" && <div>
        {kan.sort((a, b)=>a.title>b.title?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.priority===3?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
    {order === "Priority" && <div>
        {kan.sort((a, b)=>a.priority<b.priority?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.priority===3?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
</div>
<div className="cols">
    <div className='icons-1'>
    <div className="priority-icon">
    <SignalCellularAlt2BarSharpIcon color='action'/>
    </div>
    <div className='heading'>Medium</div>
    <div className="entries">{p2}</div>
        <div className='heading-add'>+</div>  
        <div className="opt1">
            <MoreHorizIcon />
        </div>      
    </div>
    {order === "Title" && <div>
        {kan.sort((a, b)=>a.title>b.title?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.priority===2?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
    {order === "Priority" && <div>
        {kan.sort((a, b)=>a.priority<b.priority?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.priority===2?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
</div>
<div className="cols">
<div className='icons-1'>
<div className="priority-icon">
<SignalCellularAlt1BarSharpIcon color='action'/>
</div>
<div className='heading'>Low</div>
<div className="entries">{p1}</div>
        <div className='heading-add'>+</div>  
        <div className="opt1">
            <MoreHorizIcon />
        </div>      
    </div>
    {order === "Title" && <div>
        {kan.sort((a, b)=>a.title>b.title?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.priority===1?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
    {order === "Priority" && <div>
        {kan.sort((a, b)=>a.priority<b.priority?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.priority===1?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
</div>
<div></div>
</div>
    </div>
  )
}

export default ColumnsPriority