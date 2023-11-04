import LinearChart from '@/component/dashboard/linearChart'
import SliderDashboard from '@/component/dashboard/SliderDashboard'
import BarChart from '@/component/dashboard/BarChart'
import styled from '@emotion/styled'
import TreeMap from '@/component/dashboard/treeMap'
import { CountryBoard } from '@/component/dashboard/CountryBoard'
import { BrushBar } from '@/component/dashboard/BrushChart'
import { Status } from '@/component/dashboard/Status'
import { Grid } from '@mui/material'
import dashLoader from '@/component/dashboard/component/dashLoader'



const Container = styled(Grid)(props=>({
  width: '100%',
  display:'flex',
  direction: 'column',
  borderRadius: '8px',
  marginBottom: '5px',

  '@media(max-width:1200px)': {
    marginTop: '50px',
  },
}))


const DashBoard = ({barData, linearData, radialData}) => {

  const SliderWrapper = dashLoader(SliderDashboard, 12, 10, 8)
  const LinearWrapper = dashLoader(LinearChart, 12, 2, 4)
  const BarWrapper = dashLoader(BarChart, 12, 10, 6)
  const TreeWrapper = dashLoader(TreeMap, 12, 6, 12)
  const CountryWrapper = dashLoader(CountryBoard, 12, 6, 12)
  const BrushWrapper = dashLoader(BrushBar, 12, 6, 12)
  const Statusapper = dashLoader(Status, 12, 6, 12)

  return(
      <Container container spacing={1} >

              <SliderWrapper/>

              <LinearWrapper linearData={linearData}/>

              <BarWrapper barData={barData}/> 

              <TreeWrapper treeData={radialData}/>

              <CountryWrapper/>

              <BrushWrapper/>

              <Statusapper/>

      </Container>
  )
}

export async function  getStaticProps () {
  const {bar_chart} = await import('../data/data')
  const {linear_chart} = await import('../data/data')
  const {radial_chart} = await import('../data/data')
    
  return{
    props: {
      barData: bar_chart,
      linearData: linear_chart,
      radialData: radial_chart
    }
 }
}

export default DashBoard