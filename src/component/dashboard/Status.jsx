import { Icon } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import { StyledCard } from "../../../styles/dashboard/status/statusChart";
import { DashboardHeader, HiddenMenu } from "./BarChart";
import { useDispatch, useSelector } from "react-redux";
import { TextSecondry } from "../modals/EmailDetailedModal";
import { HideModal, NameModal, ShowModal } from '@/Redux/DashboardHeaders';



export const Status = () => {
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
    

  return(

    <StyledCard onClick={(e) => closeModal(e)} >
      <DashboardHeader>
            <div className="right"> 
              <p>Earning Reports</p>
              <small>Weekly Earning Overview</small>
            </div>

            <div className="left">
              <Icon onClick={() => openModal("status")}>
                <MoreVertIcon fontSize='small' />
              </Icon>
              {selectedChart === 'status' && headerDisplay &&  <HiddenMenu >
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
        <div className="items">
            <div className="left">
            <Icon sx={{backgroundColor:'#2E4B4F', borderRadius:'5px'}}>
                <LocalPostOfficeOutlinedIcon sx={{color:'#28C16D'}} fontSize="small" />
              </Icon>
              <div className="detail">
                <p>Emails</p>
              
              </div>
            </div>
            <div className="right">
            
              <p>22,289</p>
              <small>0.3%</small>
            </div>
        </div>

        <div className="items">
          <div className="left">
          <Icon sx={{backgroundColor:'#274C62', borderRadius:'5px'}}>
              <ShareOutlinedIcon sx={{color:'#08B3CC'}} fontSize="small" />
            </Icon>
            <div className="detail">
              <p>Opened</p>
            </div>
          </div>
          <div className="right">
            <p>21.2%</p>
              <small>2.1%</small>
          </div>
        </div>
        <div className="items">
          <div className="left">
          <Icon sx={{backgroundColor:'#504448', borderRadius:'5px'}}>
              <NearMeOutlinedIcon sx={{color:'#F29843'}} fontSize="small" />
            </Icon>
            <div className="detail">
              <p>Clicked</p>
            </div>
          </div>
          <div className="right">
            <p>20.9%</p>
              <small>1.4%</small>
          </div>
        </div>
        <div className="items">
          <div className="left">
          <Icon sx={{backgroundColor:'#3A3B64', borderRadius:'5px'}}>
              <GroupOutlinedIcon sx={{color:'#685FD7'}} fontSize="small" />
            </Icon>
            <div className="detail">
              <p>Subscribe</p>
            </div>
          </div>
          <div className="right">
            <p>20.89%</p>
              <small>0.5%</small>
          </div>
        </div>
        <div className="items">
          <div className="left">
          <Icon sx={{backgroundColor:'#424659', borderRadius:'5px'}}>
              <GppMaybeOutlinedIcon sx={{color:'#9097B6'}} fontSize="small" />
            </Icon>
            <div className="detail">
              <p>Complaints</p>
            </div>
          </div>
          <div className="right">
            <p>19.12%</p>
            <small>1.8%</small>
          </div>
        </div>
        <div className="items">
          <div className="left">
          <Icon sx={{backgroundColor:'#4D384B', borderRadius:'5px'}}>
              <BlockOutlinedIcon sx={{color:'#B04950'}} fontSize="small" />
            </Icon>
            <div className="detail">
              <p>Blocked</p>
         
             
            </div>
          </div>
          <div className="right">
            <p>18.82%</p>
            <small>3.1%</small>
          </div>
        </div>

      </div>

    </StyledCard>


  )
}