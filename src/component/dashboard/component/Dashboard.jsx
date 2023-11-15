const { default: BarChart } = require("../BarChart")
const { BrushBar } = require("../BrushChart")
const { CountryBoard } = require("../CountryBoard")
const { default: LinearChart } = require("../linearChart")
const { default: RadarChart } = require("../RadarChart")
const { default: SliderDashboard } = require("../SliderDashboard")
const { Status } = require("../Status")
const { default: TreeMap } = require("../treeMap")
const { default: dashLoader } = require("./dashLoader")

const DashBoard = ({barData, linearData, radialData}) => {

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

          <LinearWrapper minHeight={100} linearData={linearData}/>

          <BarWrapper barData={barData}/> 

          <TreeWrapper treeData={radialData}/>

          <CountryWrapper/>

          <BrushWrapper/>

          <Statusapper/>

        </>
  )
  
}
export default DashBoard
