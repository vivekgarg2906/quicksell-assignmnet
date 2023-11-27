import React from 'react'
import "./ColumnsUsers.css";
import Card from '../card/Card'
import UserMap from '../userMap/UserMap';

function ColumnsUsers({kan, users, order, group}) {
  return (
    <div className="columnsUsers">
        <div className="container2">
            <div className="cols-1">
            {users.map((item, index)=>{
              const val = kan.filter(it=>it.userId===item.id)
                return(<>{item.name?<UserMap key={index} user={item} kan={kan} order={order} group={group} count={val.length}/>:null}
            </>)})}
            </div>
        </div>
    </div>
  )
}

export default ColumnsUsers