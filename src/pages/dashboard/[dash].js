import styled from '@emotion/styled'
import React from 'react'
import { Grid } from '@mui/material'
import DashBoard from '@/component/dashboard/component/Dashboard'

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


const Dash = ({ Component, data }) => {
  console.log(Component)
  return(
      <Container container spacing={1} >

        {/* <Component {...data} /> */}
        
      </Container>
  )
}



export async function getStaticPaths () {
  return {
    paths : [
      { params: { dash: 'dashboard' }},
      { params: { dash: 'analytics'}}
    ],
    fallback: true
  }
}

export async function  getStaticProps ({ params }) {
  const {bar_chart} = await import('../../data/data')
  const {linear_chart} = await import('../../data/data')
  const {radial_chart} = await import('../../data/data')

  console.log(params.path)

  return {
    props: {
      Component : 'DashBoard',
      data: { bar_chart, linear_chart, radial_chart }        
    }
  }
  
  // switch( params.path ) {
  //   case'analytics':
  //     return{
  //       props: {
  //         App: DashBoard,
  //         data: { bar_chart, linear_chart, radial_chart }        
  //       }
  //     }
  
  //   case'dashboard':
  //     return{
  //       props: {
  //         App: Analytics,
  //         data: { bar_chart, linear_chart, radial_chart }        
  //       }
  //     }
  //   default: {
  //     return {
  //       props: {}
  //     }
  //   }
  // }
    
}

export default Dash