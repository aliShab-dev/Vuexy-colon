import { useState } from "react";
import { useEffect } from "react";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Icon, Stack, Typography, Grid, TableCell } from '@mui/material';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import StartIcon from '@mui/icons-material/Start';
import { StyledCard } from "../../../styles/dashboard/tree/treeChrat";
import { DashboardHeader, HiddenMenu } from "./BarChart";
import { useDispatch, useSelector } from "react-redux";
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
    <Grid
      bgcolor={'background.paper'}
      borderRadius={2}
      padding={2}
      container
      >

          <Grid
            container
            display={'flex'} >

              <Grid
                item
                xs={11}
                sm={6}
                marginX={'auto'}
                marginY={'auto'}
                >

                <ResponsiveContainer width="100%" height={200}>

                  <RadialBarChart
                    id='test-bar'
                    width={200}
                    height={200}
                    cx="50%"
                    cy="50%"
                    innerRadius="10%"
                    outerRadius="80%"
                    barSize={10}
                    data={data}>

                      <RadialBar
                        minAngle={15}
                        background
                        clockWise
                        dataKey="uv"/>
                        
                  </RadialBarChart>
                  
                </ResponsiveContainer>
              </Grid>           

              <Grid
                item
                gap={2}
                xs={11}
                sm={6}
                marginX={'auto'}
                marginY={'auto'}
                >

                <Stack
                  alignItems={'start'}
                  justifyContent={'start'}
                  >

                  <Typography
                    color={'text.icon'}
                    fontWeight={800}
                    fontSize={18}
                    >
                      153
                  </Typography>

                  <Typography
                    color={'text.primary'}
                    fontSize={14}
                    >
                      Total Tickets
                  </Typography>

                </Stack>

              <Grid
                container
                direction={'row'}
                spacing={2}
                >

                <Grid
                  display={'flex'}
                  direction={'column'}
                  item
                  xs={6}
                  gap={1}
                  justifyContent={'center'}
                  alignItems={'start'}
                  >
                        
                    <Stack
                      direction={'row'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      gap={1}
                    >

                      <Icon
                        sx={{
                          backgroundColor:'#3A3B64',
                          orderRadius:'5px'
                          }}>

                        <StartIcon
                          fontSize="small"
                          sx={{
                            color:'#685FD7'
                            }}/>

                      </Icon>

                      <Stack
                        justifyContent={'center'}
                        alignItems={'start'}
                        >
                          <Typography
                            color={'text.icon'}
                            fontSize={11}
                            fontWeight={700}
                            >
                            Opened
                          </Typography>
                          <Typography
                            color={'text.primary'}
                            fontWeight={500}  
                            fontSize={11}
                            >
                            15 h
                          </Typography>
                      </Stack>

                    </Stack>

                    <Stack
                      direction={'row'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      gap={1}
                    >
                      <Icon
                        sx={{
                          backgroundColor:'#274C62',
                          borderRadius:'5px'
                          }}>

                        <ConfirmationNumberIcon
                          sx={{
                            color:'#1291A9'
                            }}
                          fontSize="small"/>

                      </Icon>


                      <Stack
                        justifyContent={'center'}
                        alignItems={'start'}
                        >
                      <Typography
                          color={'text.icon'}
                          fontSize={11}
                          fontWeight={700}
                          >
                              New Tickets
                        </Typography>
                        <Typography
                          color={'text.primary'}
                          fontSize={11}
                          fontWeight={500}
                          >
                          125
                        </Typography>
                      </Stack>
                    </Stack>

                    <Stack
                      direction={'row'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      gap={1}
                    >
                      <Icon
                        sx={{backgroundColor:'#795946',
                        borderRadius:'5px'
                        }}>

                        <HistoryToggleOffIcon  sx={{color:'#D38844'}} fontSize="small"/>

                      </Icon>


                      <Stack
                        justifyContent={'center'}
                        alignItems={'start'}
                        >
                      <Typography
                        color={'text.icon'}
                        fontSize={11}
                        fontWeight={700}
                        >
                        Day Left
                      </Typography>
                      <Typography
                        color={'text.primary'}
                        fontSize={11}
                        fontWeight={500}
                        >
                        1 Day
                      </Typography>
                      </Stack>
                    </Stack>
                </Grid>

                <Grid
                  display={'flex'}
                  direction={'column'}
                  item
                  xs={6}
                  gap={1}
                  justifyContent={'center'}
                  alignItems={'start'}
                  >
                        
                    <Stack
                      direction={'row'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      gap={1}
                    >

                      <Icon
                        sx={{
                          backgroundColor:'#3A3B64',
                          orderRadius:'5px'
                          }}>

                        <StartIcon
                          fontSize="small"
                          sx={{
                            color:'#685FD7'
                            }}/>

                      </Icon>

                      <Stack
                        justifyContent={'center'}
                        alignItems={'start'}
                        >
                          <Typography
                            color={'text.icon'}
                            fontSize={11}
                            fontWeight={700}
                            >
                            Closed
                          </Typography>
                          <Typography
                            color={'text.primary'}
                            fontWeight={500}  
                            fontSize={11}
                            >
                            16 h
                          </Typography>
                      </Stack>

                    </Stack>

                    <Stack
                      direction={'row'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      gap={1}
                    >
                      <Icon
                        sx={{
                          backgroundColor:'#274C62',
                          borderRadius:'5px'
                          }}>

                        <ConfirmationNumberIcon
                          sx={{
                            color:'#1291A9'
                            }}
                          fontSize="small"/>

                      </Icon>


                      <Stack
                        justifyContent={'center'}
                        alignItems={'start'}
                        >
                      <Typography
                          color={'text.icon'}
                          fontSize={11}
                          fontWeight={700}
                          >
                              Old Tickets
                        </Typography>
                        <Typography
                          color={'text.primary'}
                          fontSize={11}
                          fontWeight={500}
                          >
                          50
                        </Typography>
                      </Stack>
                    </Stack>

                    <Stack
                      direction={'row'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      gap={1}
                    >
                      <Icon
                        sx={{backgroundColor:'#795946',
                        borderRadius:'5px'
                        }}>

                        <HistoryToggleOffIcon  sx={{color:'#D38844'}} fontSize="small"/>

                      </Icon>


                      <Stack
                        justifyContent={'center'}
                        alignItems={'start'}
                        >
                      <Typography
                        color={'text.icon'}
                        fontSize={11}
                        fontWeight={700}
                        >
                        Days Remaining
                      </Typography>
                      <Typography
                        color={'text.primary'}
                        fontSize={11}
                        fontWeight={500}
                        >
                        15 Day
                      </Typography>
                      </Stack>
                    </Stack>

                </Grid>

              </Grid>
              

              </Grid>
    
          </Grid>
          
    </Grid>

  )
}

export default TreeMap