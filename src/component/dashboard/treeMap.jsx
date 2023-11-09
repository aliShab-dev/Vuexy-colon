import { useState } from "react";
import { useEffect } from "react";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts"
import { Icon, Stack, Typography, Grid } from '@mui/material';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import StartIcon from '@mui/icons-material/Start';

const TreeMap =({treeData})=>{
    
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
      height={'100%'}
      >

          <Grid
            container
            display={'flex'} >

              <Grid
                item
                xs={11}
                sm={5}
                marginX={'auto'}
                marginY={'auto'}
                >

                <ResponsiveContainer width="100%" height={220}>

                  <RadialBarChart
                    id='test-bar'
                    width={200}
                    height={200}
                    cx="50%"
                    cy="50%"
                    innerRadius="10%"
                    outerRadius="110%"
                    barSize={20}
                    data={data}>

                      <RadialBar
                        minAngle={30}
                        clockWise
                        dataKey="uv"/>
                        
                  </RadialBarChart>
                  
                </ResponsiveContainer>
              </Grid>           

              <Grid
                item
                display={'flex'}
                flexDirection={'column'}
                gap={2}
                xs={11}
                sm={7}
                marginX={'auto'}
                marginY={'auto'}
                >
                  <Grid
                    container
                    item
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'start'}
                    justifyContent={'start'}
                    gap={1}
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

                  </Grid>

                  <Grid
                    container
                    direction={'row'}
                    spacing={2}
                    >
                    <Grid
                      container
                      item
                      display={'flex'}
                      direction={'column'}
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
                      container
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
                            Days count
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