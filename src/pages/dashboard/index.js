import LinearChart from '@/component/dashboard/linearChart'
import SliderDashboard from '@/component/dashboard/SliderDashboard'
import BarChart from '@/component/dashboard/BarChart'
import styled from '@emotion/styled'
import dashLoader from '@/component/dashboard/component/dashLoader'
import TreeMap from '@/component/dashboard/treeMap'
import { CountryBoard } from '@/component/dashboard/CountryBoard'
import { BrushBar } from '@/component/dashboard/BrushChart'
import { Status } from '@/component/dashboard/Status'
import { Grid } from '@mui/material'


const Container = styled(Grid)({
  width: '100%',
  display:'flex',
  direction: 'column',
  borderRadius: '8px',
  marginBottom: '5px',

  '@media(max-width:1200px)': {
    marginTop: '50px',
  },
})


const DashBoard = ({barData, linearData, radialData}) => {

  const SliderWrapper = dashLoader(SliderDashboard, 12, 8, 8)
  const LinearWrapper = dashLoader(LinearChart, 12, 4, 4)
  const BarWrapper = dashLoader(BarChart, 12, 6, 6)
  const TreeWrapper = dashLoader(TreeMap, 12, 6, 6)
  const CountryWrapper = dashLoader(CountryBoard, 12, 6, 4)
  const BrushWrapper = dashLoader(BrushBar, 12, 6, 4)
  const Statusapper = dashLoader(Status, 12, 12, 4)


  return(
      <Container container spacing={1} >

              <SliderWrapper/>

              <LinearWrapper minHeight={100} linearData={linearData}/>

              <BarWrapper barData={barData}/> 

              <TreeWrapper treeData={radialData}/>

              <CountryWrapper/>

              <BrushWrapper/>

              <Statusapper/>

      </Container>
  )
}

export async function  getStaticProps () {
  const {bar_chart} = await import('../../data/data')
  const {linear_chart} = await import('../../data/data')
  const {radial_chart} = await import('../../data/data')
    
  return{
    props: {
      barData: bar_chart,
      linearData: linear_chart,
      radialData: radial_chart
    }
 }
}

export default DashBoard