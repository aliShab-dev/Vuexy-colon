import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Grid, Icon, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { Card } from '../../../styles/dashboard/bar/barChart';
import { BarChart as BarB, Bar, Cell, XAxis, ResponsiveContainer} from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { TextSecondry } from '../eMail/index/modal/inboxModal/EmailDetailedModal';
import { HideModal, NameModal, ShowModal } from '@/Redux/DashboardHeaders';
import { Stack } from '@mui/system';


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
  <Grid 
    container
    bgcolor={'background.paper'}
    borderRadius={2}
    >
    
    
      {/* <DashboardHeader >
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
      </DashboardHeader> */}

      <Grid container padding={2}>

        <Grid
          item
          marginBottom={2}
          xs={12}
          sm={2}
          md={4}
          >
            <Stack
              direction={'row'}
              spacing={1}
              alignItems={'center'}
                >
              <Typography
                color={'text.icon'}
                fontSize={20}
                fontWeight={800}
                >
                $486    
              </Typography>
              <Typography
                fontSize={14}
                borderRadius={1}
                bgcolor={'rgba(0,255,0,.15)'}
                sx={{opacity:1}}
                color={'#28BE6C'}
                >
                94.5%
              </Typography>

            </Stack>

            <Stack>
              <Typography
                color={'text.light'}
                fontSize={10}
                fontWeight={600}
                >
                You informed of this week compared to last week
              </Typography>
            </Stack>
          </Grid>  

          <Grid
          item
          xs={12}
          sm={10}
          md={8}
          >
          <ResponsiveContainer  width="100%" height={150}>

              <BarB id='testbar' height={150} data={data}>

                  <XAxis style={{fontSize:'10px'}} dataKey="name" />
                  
                  <Bar id='testsb' dataKey="uv" >
                    {
                      data.map((entry) => (
                        <Cell
                          id='tesy'
                          cursor="pointer"
                          fill={entry.name === 'Tue'? '#9086E4':'#393B64'}
                          key={entry.name}
                          />
                        ))
                    }
                  </Bar>

            </BarB>
          </ResponsiveContainer>

        </Grid>

      </Grid>

      <Stack
        width={'95%'}
        margin={'auto'}
        marginBottom={1}
        border={'1px solid #3A3B64'}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        padding={1}
        >

        <Stack
          spacing={1}
          justifyContent={'center'}
          alignItems={'center'}
          >

            <Stack
              direction={'row'}
              bgcolo={'#3A3B64'}
              color={'#6B61DF'}
              spacing={1}
              alignItems={'center'}
              >
              <Typography
                fontSize={12}
                borderRadius={1}
                color={'#6B61DF'}
                bgcolor={'rgba(58,59,100,0.4)'}
                paddingX={'3px'}
                >
                $
              </Typography>
              <Typography
                fontSize={12}
                color={'text.primary'}
              >
                Earning
              </Typography>
            </Stack>
            
            <Stack>
              <Typography
              fontSize={14}
              color={'text.primary'}
              >
                $ 561.36
              </Typography>

              <Box sx={{ width: '100%' }}>
                <LinearProgress value={90} />
              </Box>    
            </Stack>
        </Stack>

        <Stack
          spacing={1}
          justifyContent={'center'}
          alignItems={'center'}
          >

            <Stack
              direction={'row'}
              bgcolo={'#3A3B64'}
              color={'#6B61DF'}
              spacing={1}
              alignItems={'center'}
              >
              <Typography
                fontSize={12}
                borderRadius={1}
                color={'#6B61DF'}
                bgcolor={'rgba(58,59,100,0.4)'}
                paddingX={'3px'}
                >
                  &#8364;
              </Typography>
              <Typography
                fontSize={12}
                color={'text.primary'}
              >
                Earning
              </Typography>
            </Stack>
            
            <Stack>
              <Typography
              fontSize={14}
              color={'text.primary'}
              >
                &#8364; 526.56
              </Typography>

              <Box sx={{ width: '100%' }}>
                <LinearProgress value={90} />
              </Box>    
            </Stack>
        </Stack>

        <Stack
          spacing={1}
          justifyContent={'center'}
          alignItems={'center'}
          >

            <Stack
              direction={'row'}
              bgcolo={'#3A3B64'}
              color={'#6B61DF'}
              spacing={1}
              alignItems={'center'}
              >
              <Typography
                fontSize={12}
                borderRadius={1}
                color={'#6B61DF'}
                bgcolor={'rgba(58,59,100,0.4)'}
                paddingX={'3px'}
                >
                &#8377;
              </Typography>
              <Typography
                fontSize={12}
                color={'text.primary'}
              >
                Earning
              </Typography>
            </Stack>
            
            <Stack>
              <Typography
              fontSize={14}
              color={'text.primary'}
              >
                &#8377; 621.3
              </Typography>

              <Box sx={{ width: '100%' }}>
                <LinearProgress value={90} />
              </Box>    
            </Stack>
        </Stack>

      </Stack>
  </Grid>

  )
}

export default BarChart