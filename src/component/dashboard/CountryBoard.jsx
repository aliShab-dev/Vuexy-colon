import { Avatar, Icon } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledCard } from "../../../styles/dashboard/countries/CountriesChart";
import { DashboardHeader, HiddenMenu } from "./BarChart";
import { TextSecondry } from "../eMail/index/modal/EmailDetailedModal";
import { useDispatch, useSelector } from "react-redux";
import { HideModal, NameModal, ShowModal } from '@/Redux/DashboardHeaders';




export const CountryBoard = () => {
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
              <Icon onClick={() => openModal("country")}>
                <MoreVertIcon fontSize='small' />
              </Icon>
              {selectedChart === 'country' && headerDisplay &&  <HiddenMenu >
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
            <Avatar alt="usa" src="/united-states-svgrepo-com.svg" sx={{ width: 24, height: 24 }} />
            <div className="detail">
              <p>$ 8,632 K</p>
              <small>United State</small>
            </div>
          </div>
          <div className="right">
            <Icon>
              <KeyboardArrowUpIcon sx={{color:'#28C46D'}} fontSize="small" />
            </Icon>
            <p>25.8%</p>
          </div>
        </div>

        <div className="items">
          <div className="left">
            <Avatar alt="Brazil" src="/brazil-svgrepo-com.svg" sx={{ width: 24, height: 24 }} />
            <div className="detail">
              <p>$ 8,202 K</p>
              <small>Brazil</small>
            </div>
          </div>
          <div className="right">
            <Icon>
              <KeyboardArrowDownIcon sx={{color:'#D04E52'}} fontSize="small" />
            </Icon>
            <p>21.2%</p>
          </div>
        </div>
        <div className="items">
          <div className="left">
            <Avatar alt="india" src="/india-svgrepo-com.svg" sx={{ width: 24, height: 24 }} />
            <div className="detail">
              <p>$ 8,101 K</p>
              <small>India</small>
            </div>
          </div>
          <div className="right">
            <Icon>
              <KeyboardArrowUpIcon sx={{color:'#28C46D'}} fontSize="small" />
            </Icon>
            <p>20.9%</p>
          </div>
        </div>
        <div className="items">
          <div className="left">
            <Avatar alt="australia" src="/flag-for-flag-australia-svgrepo-com.svg" sx={{ width: 24, height: 24 }} />
            <div className="detail">
              <p>$ 7,832 K</p>
              <small>Australia</small>
            </div>
          </div>
          <div className="right">
            <Icon>
              <KeyboardArrowDownIcon sx={{color:'#D04E52'}} fontSize="small" />
            </Icon>
            <p>20.89%</p>
          </div>
        </div>
        <div className="items">
          <div className="left">
            <Avatar alt="france" src="/flag-for-flag-france-svgrepo-com.svg" sx={{ width: 24, height: 24 }} />
            <div className="detail">
              <p>$ 7,622 K</p>
              <small>France</small>
            </div>
          </div>
          <div className="right">
            <Icon>
              <KeyboardArrowDownIcon sx={{color:'#D04E52'}} fontSize="small" />
            </Icon>
            <p>19.12%</p>
          </div>
        </div>
        <div className="items">
          <div className="left">
            <Avatar alt="china" src="/flag-for-flag-china-svgrepo-com.svg" sx={{ width: 24, height: 24 }} />
            <div className="detail">
              <p>$ 7,432 K</p>
              <small>China</small>
            </div>
          </div>
          <div className="right">
            <Icon>
              <KeyboardArrowUpIcon sx={{color:'#28C46D'}} fontSize="small" />
            </Icon>
            <p>18.82%</p>
          </div>
        </div>
        <div className="items">
          <div className="left">
            <Avatar alt="germany" src="/flag-for-flag-germany-svgrepo-com.svg" sx={{ width: 24, height: 24 }} />
            <div className="detail">
              <p>$ 6,432 K</p>
              <small>Germany</small>
            </div>
          </div>
          <div className="right">
            <Icon>
              <KeyboardArrowUpIcon sx={{color:'#28C46D'}} fontSize="small" />
            </Icon>
            <p>18.32%</p>
          </div>
        </div>
      </div>
    </StyledCard>
  )
}