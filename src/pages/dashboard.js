import LinearChart from '@/component/dashboard/linearChart'
import SliderDashboard from '@/component/dashboard/SliderDashboard'
import BarChart from '@/component/dashboard/BarChart'
import { MainContainer } from '../../styles/global'
import styled from '@emotion/styled'
import TreeMap from '@/component/dashboard/treeMap'
import { CountryBoard } from '@/component/dashboard/CountryBoard'
import { BrushBar } from '@/component/dashboard/BrushChart'
import { Status } from '@/component/dashboard/Status'


const Container = styled(MainContainer)(props=>({
  width: '100%',
  display:'flex',
  flexWrap: 'wrap'
  
}))


const DashBoard = ({barData, linearData, radialData}) => {


  return(
    <Container>
        <SliderDashboard/>

        <LinearChart linearData={linearData}/>

        <BarChart barData={barData}/> 

        <TreeMap treeData={radialData}/>

        <CountryBoard/>

        <BrushBar/>

        <Status/>
        
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