import { Radar, RadarChart as RadCha, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

import { Icon, Stack, Typography, Grid } from '@mui/material';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

const RadarChart =()=>{

  const chartData = [
    {
      subject: 'Veraity',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Founds',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Incomes',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Supports',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Sells',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
 
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
            sm={8}
            marginX={'auto'}
            marginY={'auto'}
            >
            <ResponsiveContainer width={'100%'} height={200}>
              <RadCha cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" fontSize={10}/>
                <Radar name="Mike" dataKey="A" stroke="#28C850" fill="#28BE5D" fillOpacity={0.5} />
              </RadCha>
            </ResponsiveContainer>
         </Grid>
    
          <Grid
            item
            display={'flex'}
            flexDirection={'column'}
            gap={2}
            xs={11}
            sm={4}
            marginX={'auto'}
            marginY={'auto'}
            >
            <Grid
              item
              display={'flex'}
              flexDirection={'column'}
              alignItems={'start'}
              justifyContent={'start'}
              gap={1}
              >
              <Stack direction={'row'}>

              <Typography
                color={'text.icon'}
                fontWeight={600}
                fontSize={13}
                >
                 $ 15 K  
              </Typography>

              <Typography
                color={'text.primary'}
                fontWeight={600}
                fontSize={13}
                >
                  Total
              </Typography>
              </Stack>

              
              <Typography
                color={'text.primary'}
                fontWeight={600}
                fontSize={10}
                >
                  Summery of Last 3 days sell
              </Typography>

            </Grid>
            <Grid
              container
              direction={'row'}
              spacing={2}
              >
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
                        fontSize={10}
                        fontWeight={400}
                        >
                          Bars
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
                      fontSize={10}
                      fontWeight={400}
                      >
                      Since
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

export default RadarChart