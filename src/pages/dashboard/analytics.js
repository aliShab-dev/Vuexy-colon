import LinearChart from '@/component/dashboard/linearChart'
import BarChart from '@/component/dashboard/BarChart'
import styled from '@emotion/styled'
import dashLoader from '@/component/dashboard/component/dashLoader'
import RadarChart from '@/component/dashboard/RadarChart'
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


const analytics = ({ barData, linearData }) => {

  const BarWrapper = dashLoader(BarChart, 12, 12, 4)
  const RadarWrapper = dashLoader(RadarChart, 12, 12, 4)
  const LinearWrapper = dashLoader(LinearChart, 12, 4, 4)
  const BrushWrapper = dashLoader(BrushBar, 12, 8, 12)
  const CountryWrapper = dashLoader(CountryBoard, 12, 6, 6)
  const Statusapper = dashLoader(Status, 12, 6, 6)

  return(
      <Container container spacing={1} >

              <BarWrapper barData={barData}/> 

              <RadarWrapper/>

              <LinearWrapper minHeight={150} linearData={linearData}/>

              <BrushWrapper/>

              <CountryWrapper/>

              <Statusapper/>


      </Container>
  )
}

export async function  getStaticProps () {
  const {bar_chart} = await import('../../data/data')
  const {linear_chart} = await import('../../data/data')
    
  return{
    props: {
      barData: bar_chart,
      linearData: linear_chart,
    }
 }
}

export default analytics