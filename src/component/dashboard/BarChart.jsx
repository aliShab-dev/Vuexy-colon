import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Icon } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { Card } from '../../../styles/dashboard/bar/barChart';
import { BarChart as BarB, Bar, Cell, XAxis,} from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { TextSecondry } from '../modals/EmailDetailedModal';
import { HideModal, NameModal, ShowModal } from '@/Redux/DashboardHeaders';


export const DashboardHeader = styled.div(props => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    '& .right':{
      display:'flex',
      flexDirection: 'column',
      justifyContent:'start',
      color: '#717AB0',
      '& p':{
        fontSize: '12px',
        fontWeight: '600',
        color:'#BDC0DA',
        fontFamily: 'sans-serif'
      },
      '& small':{
        fontSize: '10px',
        fontFamily: 'sans-serif'
      }
    },
    '& .left':{
      color:'#717AB0',
      position: 'relative',
      cursor: 'pointer',
  },
}))

export const HiddenMenu = styled.div({
    boxShadow:'0px 2px 7px -2px #060606',
    backgroundColor:'red',
    justifyContent: 'space-evenly',
    width: '80px',
    height: '60px',
    padding: '5px',
    position: 'absolute',
    top: '5px',
    right: '25px',
    display:'flex',
    flexDirection: 'column',
    backgroundColor:'#2F3349',
    zIndex: '50',
 
    "& .item":{
      width: '100%',
      display: 'flex',
      padding: '5px',
      '&:hover':{
        cursor: 'pointer',
        backgroundColor: '#393B64',
        transition: '.3s ease',
        
        '& span': {
          color: '#685DD8',
        }
      }
    }
})

const BarChart = ({barData}) => {
  const dispatch = useDispatch()
  const headerDisplay = useSelector(state => (state.DashboardHeaders.isShow))
  const selectedChart = useSelector(state => (state.DashboardHeaders.ChartName))

  const closeModal = e => {
    const moreVer = document.querySelector('.moreVer')
    headerDisplay && (e.target !== moreVer) && dispatch(HideModal()) && dispatch(NameModal(''))
  }
  const openModal = (props) => {
    dispatch(NameModal(props))
    dispatch(ShowModal())
    console.log(selectedChart, headerDisplay)
  }
    
  const [data, setData] = useState([])
  useEffect( ()=>{
    if(barData){
      setData(barData)
    }
  },[])
  
  return(
  <Card onClick={(e) => closeModal(e)} >
     <DashboardHeader >
      <div className="right"> 
        <p>Earning Reports</p>
        <small>Weekly Earning Overview</small>
      </div>

      <div className="left">
        <Icon className='moreVer' onClick={() => openModal("bar")}>
          <MoreVertIcon fontSize='small' />
        </Icon>
       {selectedChart === 'bar' && headerDisplay &&  <HiddenMenu >
            <div className='item' onClick={(e) => closeModal(e)}>
              <TextSecondry >View More</TextSecondry>
            </div>
            <div className='item' onClick={(e) => closeModal(e)}>
              <TextSecondry >Delete</TextSecondry>
            </div>
        </HiddenMenu>}
      </div>
    </DashboardHeader>

    <div className='chart'>
       <div className='info'>
            <div className="header">$486    
              <strong style={{borderRadius:'5px', color:'#28BE6C', backgroundColor:'#2E4B4F'}}>
                94.5%
              </strong>
            </div>
            <div className="disc">
              <p>
                You informed of this week compared to last week
              </p>
            </div>
        </div>  
        <BarB id='testbar' width={450} height={150} data={data}>
            <XAxis style={{fontSize:'10px'}} dataKey="name" />
            <Bar id='testsb' dataKey="uv" >
              {data.map((entry) => (
                <Cell id='tesy'  cursor="pointer" fill={entry.name === 'Tue'? '#9086E4':'#393B64'}
                 key={entry.name} />
                ))}
            </Bar>
       </BarB>

    </div>
    
    <div className='details'>
      <div className="detail-column">
          <div className='brand'>
            <span style={{backgroundColor: '#3A3B64',color:'#6B61DF'}}>
               $
            </span>
            <p>Earnings</p>
          </div>
          <div>
            <span>
              $561.36
            </span>
            <Box sx={{ width: '100%' }}>
              <LinearProgress value={90} />
            </Box>    
          </div>
      </div>
      <div className="detail-column">
          <div  className='brand'>
            <span style={{backgroundColor: '#3A3B64',color:'#6B61DF'}}>
             &#8364;
            </span>
            <p>Earning</p>
          </div>
          <div>
            <span>
            &#8364;561.36
            </span>
            <Box sx={{ width: '100%' }}>
              <LinearProgress value={50} />
            </Box>    
          </div>
      </div>
      <div className="detail-column">
          <div  className='brand'>
            <span style={{backgroundColor: '#3A3B64',color:'#6B61DF'}}>
              &#8377;
            </span>
            <p>Earning</p>
          </div>
          <div>
            <span>
            &#8377;822.18
            </span>
                    <Box sx={{ width: '100%' }}>
              <LinearProgress value={10} />
            </Box>     
                
          </div>
      </div>
    </div>
  </Card>
  )
}

export default BarChart