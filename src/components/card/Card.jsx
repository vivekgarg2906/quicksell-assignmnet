import React from 'react'
import "./Card.css"
import AnnouncementIcon from '@mui/icons-material/Announcement';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SignalCellularAlt1BarSharpIcon from '@mui/icons-material/SignalCellularAlt1BarSharp';
import SignalCellularAlt2BarSharpIcon from '@mui/icons-material/SignalCellularAlt2BarSharp';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import TonalityIcon from '@mui/icons-material/Tonality';
import DonutLargeSharpIcon from '@mui/icons-material/DonutLargeSharp';


function Card({item, id, title, tag, available, group}) {
  return (
    <div className="container-card">
        <div className="top">
            <div className="id">
                {id}
                {/* {data.id} */}
            </div>
            {group !== "Users" && <div className="dp-1"> 
                <img src="./img/man.png" alt="" className="userImg" />
                {available === false ? 
                    <img src="./img/Location_dot_lightgrey.svg.png" alt="" className="statusDp" /> : 
                    <img src="./img/Yellow_Dots_Golden.svg.png" alt="" className="statusDp" />
                }
            </div>}
        </div>
        <div className="titleName-1">
            <div className='titleIcon'>
            {group !== "Status" && item.status === "Done" &&
            <CheckCircleIcon color='primary' className='titleNameIcon'/>
            // (<img src="./img/circle_tick_blue.png" alt="" className="progress" />)
            }
            {group !== "Status" && item.status === "Todo" &&
            <PanoramaFishEyeIcon color='disabled' className='titleNameIcon'/>
            // (<img src="./img/light_gray_outline_circle.png" alt="" className="progress" />)
            }
            {group !== "Status" && item.status === "In progress" &&
            <TonalityIcon style={{ color: 'orange' }} className='titleNameIcon'/>

            // (<img src="./img/inprogress_golden_circle.png" alt="" className="progress" />)
            }
            {group !== "Status" && item.status === "Canceled" &&
            <CancelIcon color='disabled' className='titleNameIcon'/>

            // (<img src="./img/circle_tick_blue.png" alt="" className="progress" />)
            }
            {group !== "Status" && item.status === "Backlog" &&
            <DonutLargeSharpIcon color='disabled' className='titleNameIcon'/>

            // <img src="./img/doted_gray_circle.png" alt="" className="progress" />
            }
            </div>
            <div className='text mainTitle'>

            {title}
            </div>
        </div>
        <div className="bottom">
            {group !== "Priority" && <div className="priorityPos">
                {item.priority === 0 && <MoreHorizIcon color='disabled'/>}
                {item.priority === 1 && <SignalCellularAlt1BarSharpIcon color='disabled' className='pPIcon'/>}
                {item.priority === 2 && <SignalCellularAlt2BarSharpIcon color='disabled'/>}
                {item.priority === 3 && <SignalCellularAltIcon color='disabled'/>}
                {item.priority === 4 && <AnnouncementIcon style={{ color: 'orange' }} className='pPIcon'/>}
                {/* <img src="./img/check.png" alt="" className="priorityNum"/> */}
            </div>}
            {tag && 
            <div className="mainTags text">
                {tag.map((item, index)=>{
                    return(<>{item?<div className="tags">
                    <div className="tag">
                        <img src="./img/Location_dot_lightgrey.svg.png" alt="" className="tagDot" />
                        <div className="tagName">
                            {item}
                        </div>
                    </div>
                </div>:null}
                </>)})}
            {/* <div className="tags">
                <div className="tag">
                    <img src="./img/Location_dot_lightgrey.svg.png" alt="" className="tagDot" />
                    <div className="tagName">
                        {tag}
                    </div>
                    {data.tag}
                </div>
            </div> */}
            </div>}
        </div>
    </div>
  )
}

export default Card