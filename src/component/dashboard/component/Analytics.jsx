import BarChart from "../BarChart"
import { BrushBar } from "../BrushChart"
import { CountryBoard } from "../CountryBoard"
import LinearChart from "../linearChart"
import RadarChart from "../RadarChart"
import { Status } from "../Status"
import dashLoader from "./dashLoader"

const Analytics = ({ barData, linearData }) => {

  const BarWrapper = dashLoader(BarChart, 12, 12, 4)
  const RadarWrapper = dashLoader(RadarChart, 12, 12, 4)
  const LinearWrapper = dashLoader(LinearChart, 12, 4, 4)
  const BrushWrapper = dashLoader(BrushBar, 12, 8, 12)
  const CountryWrapper = dashLoader(CountryBoard, 12, 6, 6)
  const Statusapper = dashLoader(Status, 12, 6, 6)

  return(
        <>
          <BarWrapper barData={barData}/> 

          <RadarWrapper/>

          <LinearWrapper minHeight={150} linearData={linearData}/>

          <BrushWrapper/>

          <CountryWrapper/>

          <Statusapper/>
        </>
  )
}



export default Analytics