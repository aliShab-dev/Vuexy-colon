import { Line, LineChart, ResponsiveContainer } from "recharts"
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { Icon } from "@mui/material";
import { WraperLinearChart } from "../../../styles/dashboard/linear/linearChart";
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
    <WraperLinearChart>
      
    <div className="badge">
        <Icon sx={{borderRadius:'50%', color:'#28BE6C', backgroundColor:'#2E4B4F'}}>
          <EqualizerIcon fontSize="small"/>
        </Icon>
        <strong>94.5%</strong>
        <small>Revanue Genarated</small>
    </div>
    <ResponsiveContainer minWidth={400} width="100%" height={80}>
      <LineChart id="test" width="100%" height={80} data={data} >
        <Line  type="monotone" dataKey="uv"  dot={false} stroke="#28C76F"  />
        <Line  type="monotone" p dataKey="pv"  dot={false} stroke="#00CFE8" />
      </LineChart>
    </ResponsiveContainer>


   </WraperLinearChart>
  )
}


export default LinearChart