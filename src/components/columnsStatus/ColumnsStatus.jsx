import React, { useEffect, useState } from 'react'
import "./ColumnsStatus.css"
import Card from '../card/Card'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import TonalityIcon from '@mui/icons-material/Tonality';
import DonutLargeSharpIcon from '@mui/icons-material/DonutLargeSharp';

function ColumnsStatus({kan, users, order, group}) {
  const [todo, setTodo] = useState();
  const [backlog, setBacklog] = useState();
  const [inprogress, setInProgress] = useState();
  const [done, setDone] = useState();
  const [cancelled, setCancelled] = useState();
  const Count = async() => {
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    for (let i = 0; i < kan.length; i++) {
      if (kan[i].status==="Backlog") {
        a++;
      }
      else if(kan[i].status==="Todo") {
        b++;
      }
      else if(kan[i].status==="In progress") {
        c++;
      }
      else if(kan[i].status==="Done") {
        d++;
      }
      else if(kan[i].status==="Cancelled") {
        e++;
      }
    }
    setBacklog(a);
    setTodo(b);
    setInProgress(c);
    setDone(d);
    setCancelled(e);
 };

  useEffect(() => {
    Count();
  }, []);

  return (
    <div className="container-columnsStatus">
        <div className="container2">

<div className="cols">
    <div className="icons">
    <div className="priority-icon">
            <DonutLargeSharpIcon color='disabled'/>
        </div>
        <div className='heading'>Backlog</div>
        <div className="entries">{backlog}</div>
        <div className='heading-add'>+</div> 
        <div className="opt1">
            <MoreHorizIcon />
        </div>
</div>
{order === "Title" && <div>
    {kan.sort((a, b)=>a.title>b.title?1:-1).map((item, index)=>{
        const found = users.find(it=>it.id===item.userId);
        return(<>{item.status==="Backlog"?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag ? item.tag : null} available={found.available} group={group}/>:null}
    </>)})}
</div>}
{order === "Priority" && <div>
    {kan.sort((a, b)=>a.priority<b.priority?1:-1).map((item, index)=>{
        const found = users.find(it=>it.id===item.userId);
        return(<>{item.status==="Backlog"?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag ? item.tag : null} available={found.available} group={group}/>:null}
    </>)})}
</div>}
</div>
<div className="cols">
<div className="icons">
<div className="priority-icon">
        <PanoramaFishEyeIcon color='disabled'/>
        </div>
        <div className='heading'>Todo</div>
        <div className="entries">{todo}</div>
        <div className='heading-add'>+</div> 
        <div className="opt1">
            <MoreHorizIcon />
        </div>
</div>
    {order === "Title" && <div>
        {kan.sort((a, b)=>a.title>b.title?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.status==="Todo"?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag ? item.tag : null} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
    {order === "Priority" && <div>
        {kan.sort((a, b)=>a.priority<b.priority?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.status==="Todo"?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag ? item.tag : null} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
</div>
<div className="cols">
<div className="icons">
<div className="priority-icon">
            <TonalityIcon style={{ color: 'orange' }}/>
        </div>
        <div className='heading'>In Progress</div>
        <div className="entries">{inprogress}</div>
        <div className='heading-add'>+</div> 
        <div className="opt1">
            <MoreHorizIcon />
        </div>
</div>
    {order === "Title" && <div>
        {kan.sort((a, b)=>a.title>b.title?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.status==="In progress"?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag ? item.tag : null} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
    {order === "Priority" && <div>
        {kan.sort((a, b)=>a.priority<b.priority?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.status==="In progress"?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag ? item.tag : null} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
</div>
<div className="cols">
<div className="icons">
<div className="priority-icon">
            <CheckCircleIcon color='primary'/>
        </div>
        <div className='heading'>Done</div>
        <div className="entries">{done}</div>
        <div className='heading-add'>+</div> 
        <div className="opt1">
            <MoreHorizIcon />
        </div>
</div>
    {order === "Title" && <div>
        {kan.sort((a, b)=>a.title>b.title?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.status==="Done"?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag ? item.tag : null} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
    {order === "Priority" && <div>
        {kan.sort((a, b)=>a.priority<b.priority?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.status==="Done"?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag ? item.tag : null} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
</div>
<div className="cols">
<div className="icons">
<div className="priority-icon">
            <CancelIcon color='disabled'/>
        </div>
        <div className='heading'>Cancelled</div>
        <div className="entries">{cancelled}</div>
        <div className='heading-add'>+</div> 
        <div className="opt1">
            <MoreHorizIcon />
        </div>
</div>
    {order === "Title" && <div>
        {kan.sort((a, b)=>a.title>b.title?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.status==="Canceled"?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag ? item.tag : null} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
    {order === "Priority" && <div>
        {kan.sort((a, b)=>a.priority<b.priority?1:-1).map((item, index)=>{
            const found = users.find(it=>it.id===item.userId);
            return(<>{item.status==="Canceled"?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag ? item.tag : null} available={found.available} group={group}/>:null}
        </>)})}
    </div>}
</div>
<div></div>
</div>
    </div>
  )
}

export default ColumnsStatus;