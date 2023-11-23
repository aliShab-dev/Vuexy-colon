import React from 'react'
import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import Analytics from '@/component/dashboard/component/Analytics'
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



const Dash = ({ component, data }) => {

  return(
    <Container container spacing={1} >

    {
      component === "dashboard" ?

        <DashBoard  {...data}/>
        :
        <Analytics  {...data}/>
    }
    
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


  switch( params.dash ) {
    case'analytics':
      return{
        props: {
          component: 'analytics',
          data: { bar_chart, linear_chart, radial_chart }        
        }
      }
  
    case'dashboard':
      return{
        props: {
          component: 'dashboard',
          data: { bar_chart, linear_chart, radial_chart }        
        }
      }
    default: {
      return {
        props: {}
      }
    }
  }
    
}

export default Dash