import { Box, Grid, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { BarChart as BarB, Bar, Cell, XAxis, ResponsiveContainer} from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';
import { Stack } from '@mui/system';


const BarChart = ({barData}) => {
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
    height={'100%'}
    >
    
      <Grid container padding={2}>

        <Grid
          item
          marginBottom={2}
          xs={12}
          sm={12}
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