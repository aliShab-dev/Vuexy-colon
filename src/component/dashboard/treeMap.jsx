import { useState } from "react";
import { useEffect } from "react";
import { RadialBar, RadialBarChart } from "recharts"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Icon } from '@mui/material';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import StartIcon from '@mui/icons-material/Start';
import { StyledCard } from "../../../styles/dashboard/tree/treeChrat";
import { DashboardHeader, HiddenMenu } from "./BarChart";
import { useDispatch, useSelector } from "react-redux";
import { TextSecondry } from "../eMail/index/modal/inboxModal/EmailDetailedModal";
import { HideModal, NameModal, ShowModal } from '@/Redux/DashboardHeaders';



const TreeMap =({treeData})=>{
  const dispatch = useDispatch()
  const headerDisplay = useSelector(state => (state.DashboardHeaders.isShow))
  const selectedChart = useSelector(state => (state.DashboardHeaders.ChartName))

  const closeModal = e => {
    const moreVer = document.querySelector('.moreVer')
    headerDisplay && (e.target !== moreVer) && dispatch(HideModal())
  }
  const openModal = (props) => {
    dispatch(NameModal(props))
    dispatch(ShowModal())
    console.log(selectedChart, headerDisplay)
  }
    
  const [data, setData] = useState([])
  useEffect( ()=>{
    if(treeData){
      setData(treeData)
    }
  },[])
 


  return(
    <StyledCard onClick={(e) => closeModal(e)} >
          <DashboardHeader className='header'>
      <div className="right"> 
        <p>Earning Reports</p>
        <small>Weekly Earning Overview</small>
      </div>

      <div className="left">
        <Icon onClick={() => openModal("tree")}>
          <MoreVertIcon fontSize='small' />
        </Icon>
        {selectedChart === 'tree' && headerDisplay &&  <HiddenMenu >
            <div className='item' onClick={(e) => closeModal(e)}>
              <TextSecondry >View More</TextSecondry>
            </div>
            <div className='item' onClick={(e) => closeModal(e)}>
              <TextSecondry >Delete</TextSecondry>
            </div>
        </HiddenMenu>}
      </div>
          </DashboardHeader>

          <div className="main">
              <div className="info">
                <div className="title">
                  <bold>153</bold>
                  <p>Total Tickets</p>
                </div>
                <div className="detail">
                  <div className="item-detail">
                    <Icon sx={{backgroundColor:'#3A3B64',borderRadius:'5px'}}>
                      <StartIcon sx={{color:'#685FD7'}} fontSize="small"/>
                    </Icon>
                    <div className="caption">
                      <p>Opened</p>
                      <small>15 h</small>
                    </div>
                  </div>
                  <div className="item-detail">
                    <Icon sx={{backgroundColor:'#274C62',borderRadius:'5px'}}>
                      <ConfirmationNumberIcon  sx={{color:'#1291A9'}} fontSize="small"/>
                    </Icon>
                    <div className="caption">
                      <p>New Tickets</p>
                      <small>125</small>
                    </div>
                  </div>
                  <div className="item-detail">
                    <Icon sx={{backgroundColor:'#795946',borderRadius:'5px'}}>
                      <HistoryToggleOffIcon  sx={{color:'#D38844'}} fontSize="small"/>
                    </Icon>
                    <div className="caption">
                      <p>Day Left</p>
                      <small>1 Day</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chart">
                <RadialBarChart id='test-bar' width={200}
                    height={200} cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                    <RadialBar
                    minAngle={15}
                    background
                    clockWise
                    dataKey="uv"/>
                </RadialBarChart>
              </div>
          </div>
    </StyledCard>
  )
}

export default TreeMap