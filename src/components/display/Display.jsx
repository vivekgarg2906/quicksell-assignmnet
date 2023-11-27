import React, { useEffect, useState } from 'react'
import "./Display.css"
import ColumnsStatus from '../columnsStatus/ColumnsStatus'
import ColumnsPriority from '../columnsPriority/ColumnsPriority';
import ColumnsUsers from '../columnsUsers/ColumnsUsers';
import TuneIcon from '@mui/icons-material/Tune';

function Display() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  const [group, setGroup] = useState("Users");
  const [order, setOrder] = useState("Priority");

  const displayClick = () => {
    setOpen(!open);
    setOpenGroup(false);
    setOpenOrder(false);
  };

  const groupingClick = () => {
    setOpenGroup(!openGroup);
    setOpenOrder(false);
  };

  const orderingClick = () => {
    setOpenOrder(!openOrder);
  };

  const groupingSelectionClick = (type) => {
    setGroup(type);
    setOpenGroup(false);
  };

  const orderingSelectionClick = (type) => {
    setOrder(type);
    setOpenOrder(false);
  };


  // const [title, setTitle] = useState("");
  // const [id, setId] = useState("");
  const [kan, setKan] = useState([]);
  // const [tag, setTag] = useState([]);
  // const [available, setAvailable] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    kanban();
  }, []);

  const kanban = async () => {
    const data = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    const res = await data.json();
    // setTitle(res.tickets[0].title);
    // setId(res.tickets[0].id);
    setKan(res.tickets);
    // setTag(res.tickets[0].tag);
    // setAvailable(res.users[0]);
    setUsers(res.users);
  };
  return (
    <div className="container-display">
      <div className="navbar">
        <div className="display" onClick={() => displayClick()}>
          {/* <img src="./img/check.png" alt="" className="img1" /> */}
          <TuneIcon color='disabled'/>
          <span className="display-name">Display</span>
          <img src="./img/down.png" alt="" className="img2" />
        </div>
        {open && 
          <div className="options">
            <div className="grouping">
              <div className='groupingName'>Grouping</div>
              <div className="groupingSelected" onClick={() => groupingClick()}>
                <div className="groupingChosen">{group}</div>
                <img src="./img/down.png" alt="" className="img3" />
              </div>
              {openGroup && 
              <div className="groupingDiv">
                {group !== "Status" && <span className="groupingChoose" onClick={() => groupingSelectionClick("Status")}>Status</span>}
                {group !== "Status" && <div className="groupingSect" />}
                {group !== "Users" && <span className="groupingChoose" onClick={() => groupingSelectionClick("Users")}>Users</span>}
                {group !== "Users" && group !== "Priority" && <div className="groupingSect" />}
                {group !== "Priority" && <span className="groupingChoose" onClick={() => groupingSelectionClick("Priority")}>Priority</span>}
              </div>}
            </div>
            <div className="ordering">
              <div className="orderingName">Ordering</div>
              <div className="orderingSelected" onClick={() => orderingClick()}>
                <div className="orderingChosen">{order}</div>
                <img src="./img/down.png" alt="" className="img3" />
              </div>
              {openOrder && 
              <div className="orderingDiv">
                {order === "Priority" ?
                  (<span className="orderingChoose" onClick={() => orderingSelectionClick("Title")}>Title</span>) :
                  (<span className="orderingChoose" onClick={() => orderingSelectionClick("Priority")}>Priority</span>)
                }
              </div>}
            </div>
          </div>
        }
      </div>
      <div className='line-break'></div>
      <div className="columnSelection">
        {group === "Status" && <ColumnsStatus kan={kan} users={users} order={order} group={group}/>}
        {group === "Priority" && <ColumnsPriority kan={kan} users={users} order={order} group={group}/>}
        {group === "Users" && <ColumnsUsers kan={kan} users={users} order={order} group={group}/>}
      </div>
    </div>
  )
}

export default Display