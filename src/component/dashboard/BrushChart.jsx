import { Bar, BarChart, ReferenceLine, ResponsiveContainer } from "recharts";
import { Icon } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { StyledCard } from "../../../styles/dashboard/brush/brushChart";
import { DashboardHeader, HiddenMenu } from "./BarChart";
import { useDispatch, useSelector } from "react-redux";
import { TextSecondry } from "../eMail/index/modal/inbox/EmailDetailedModal";
import { HideModal, NameModal, ShowModal } from '@/Redux/DashboardHeaders';




const data = [
  { name: '1', uv: 700, pv: -456 },
  { name: '2', uv: -145, pv: 230 },
  { name: '3', uv: -500, pv: 645 },
  { name: '4', uv: -823, pv: 450 },
  { name: '5', uv: -100, pv: 321 },
  { name: '6', uv: -901, pv: 235 },
  { name: '7', uv: 823, pv: -267 },
  { name: '8', uv: 252, pv: -378 },
  { name: '9', uv: -279, pv: 490 },
  { name: '10', uv: 294, pv: -203 }
]
export const BrushBar = () => {
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
              <Icon onClick={() => openModal("brush")}>
                <MoreVertIcon fontSize='small' />
              </Icon>
              {selectedChart === 'brush' && headerDisplay &&  <HiddenMenu >
            <div className='item' onClick={(e) => closeModal(e)}>
              <TextSecondry >View More</TextSecondry>
            </div>
            <div className='item' onClick={(e) => closeModal(e)}>
              <TextSecondry >Delete</TextSecondry>
            </div>
        </HiddenMenu>}
            </div>
     </DashboardHeader>

      <ResponsiveContainer minWidth={400} width="100%" height={200}>
        <BarChart
            style={{alignItems: 'center'}}
            width="100%"
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
          
      <div className="info">
        <div className="item">
          <div className="left">
            <Icon sx={{backgroundColor:'#424659', borderRadius:'5px'}}>
              <AttachMoneyIcon sx={{color:'#A3A5A9'}} fontSize="small" />
            </Icon>
            <div className="detail">
              <p>Total Sales</p>
              <small>Refund</small>
            </div>
          </div>
          <div className="right">
            <bold>
              +$ 68
            </bold>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <Icon sx={{backgroundColor:'#2F3349', borderRadius:'5px'}}>
              <CurrencyExchangeIcon sx={{color:'#685FD7'}} fontSize="small" />
            </Icon>
            <div className="detail">
              <p>Total Revaneue</p>
              <small>Client Payment</small>
            </div>
          </div>
          <div className="right">
            <bold>
              +$ 29
            </bold>
          </div>
        </div>
      </div>
      
    </StyledCard>
  )
}