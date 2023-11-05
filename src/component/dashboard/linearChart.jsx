import { Line, LineChart, ResponsiveContainer } from "recharts"
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { Icon, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";


const LinearChart = ({linearData}) => {
  const [data, setData] = useState([])

  useEffect( ()=>{
    if(linearData){
      setData(linearData)
    }
  },[])

  return(
    <Grid
      container
      hieght={'100%'}
      minHeight={160}
      bgcolor={'background.paper'}
      borderRadius={2}
      >
      
    <Grid
       item
       justifyContent={'start'}
       alignItems={'start'}
       padding={2}
       height={'35%'}
      >
        <Icon
          sx={{
            borderRadius:'50%',
            color:'#28BE6C',
            backgroundColor:'rgba(0,255,0,.15)'
          }}
            >
          <EqualizerIcon fontSize="small"/>
        </Icon>
        
        <Typography
          color={'text.primary'}
          fontSize={18}
        >
          94.5%
        </Typography>

        <Typography
          color={'text.icon'}
          fontSize={12}
        >
          Revanue Genarated
        </Typography>
    </Grid>
    <Grid xs={12} height={'60%'}>
      <ResponsiveContainer  width="100%" height={80}>
        <LineChart id="test" width="100%" height={60} data={data} >
          <Line type="monotone" dataKey="uv"  dot={false} stroke="#28C76F"  />
          <Line type="monotone"  dataKey="pv"  dot={false} stroke="#00CFE8" />
        </LineChart>
      </ResponsiveContainer>
    </Grid>


   </Grid>
  )
}


export default LinearChart