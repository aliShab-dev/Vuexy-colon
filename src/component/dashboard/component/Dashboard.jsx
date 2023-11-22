import { BrandingWatermarkRounded } from "@mui/icons-material"
import BarChart from "../BarChart"
import { BrushBar } from "../BrushChart"
import { CountryBoard } from "../CountryBoard"
import LinearChart from "../linearChart"
import SliderDashboard from "../SliderDashboard"
import { Status } from "../Status"
import TreeMap from "../treeMap"
import dashLoader from "./dashLoader"


const DashBoard = ({bar_chart, linear_chart, radial_chart}) => {

  console.log(bar_chart)

  const SliderWrapper = dashLoader(SliderDashboard , 12, 8, 8)
  const LinearWrapper = dashLoader(LinearChart, 12, 4, 4)
  const BarWrapper = dashLoader(BarChart, 12, 6, 6)
  const TreeWrapper = dashLoader(TreeMap, 12, 6, 6)
  const CountryWrapper = dashLoader(CountryBoard, 12, 6, 4)
  const BrushWrapper = dashLoader(BrushBar, 12, 6, 4)
  const Statusapper = dashLoader(Status, 12, 12, 4)


  return(
        <>

          <SliderWrapper/>

          <LinearWrapper minHeight={100} linearData={linear_chart}/>

          <BarWrapper barData={bar_chart}/> 

          <TreeWrapper treeData={radial_chart}/>

          <CountryWrapper/>

          <BrushWrapper/>

          <Statusapper/>

        </>
  )
  
}
export default DashBoard
