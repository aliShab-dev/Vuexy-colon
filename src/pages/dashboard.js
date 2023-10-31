import LinearChart from '@/component/dashboard/linearChart'
import SliderDashboard from '@/component/dashboard/SliderDashboard'
import BarChart from '@/component/dashboard/BarChart'
import styled from '@emotion/styled'
import TreeMap from '@/component/dashboard/treeMap'
import { CountryBoard } from '@/component/dashboard/CountryBoard'
import { BrushBar } from '@/component/dashboard/BrushChart'
import { Status } from '@/component/dashboard/Status'
import { Grid } from '@mui/material'
import { DashboardLoader } from '@/component/dashboard/component/DashboardLoader'


const Container = styled.div(props=>({
  width: '100%',
  display:'flex',
  flexWrap: 'wrap',
  gap: '15px',
  borderRadius: '8px',
  marginBottom: '5px',
  backgroundColor: 'transparent',

  '@media(max-width:1200px)': {
    marginTop: '50px',
  },
}))


const DashBoard = ({barData, linearData, radialData}) => {

  return(
   

<Container >

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