import React from 'react'
import "./UserMap.css"
import Card from '../card/Card'
import AnnouncementIcon from '@mui/icons-material/Announcement';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function UserMap({user, kan, order, group, count}) {
  return (
    <div className="container-UserMap">
        <div className="cols-2">
            <div className='icons-1'>
            <div className="priority-icon">
            <div className="dp">
                <img src="./img/man.png" alt="" className="userImg-1" />
                {user.available === false ? 
                    <img src="./img/Location_dot_lightgrey.svg.png" alt="" className="statusDp-1" /> : 
                    <img src="./img/Yellow_Dots_Golden.svg.png" alt="" className="statusDp-1" />
                }
            </div>
                </div>
                <div className='userName'>{user.name}</div>
                <div className="entries">{count}</div>
                    <div className='heading-add'>+</div>  
                    <div className="opt1">
                        <MoreHorizIcon />
                    </div>      
            </div>
            {order === "Title" && <div>
                {kan.sort((a, b)=>a.title>b.title?1:-1).map((item, index)=>{
                    return(<>{item.userId===user.id?<Card key={index} item={item} id={item.id} title={item.title} group={group}/>:null}
                </>)})}
            </div>}
            {order === "Priority" && <div>
                {kan.sort((a, b)=>a.priority<b.priority?1:-1).map((item, index)=>{
                    return(<>{item.userId===user.id?<Card key={index} item={item} id={item.id} title={item.title} tag={item.tag} group={group}/>:null}
                </>)})}
            </div>}
        </div>
    </div>
  )
}

export default UserMap