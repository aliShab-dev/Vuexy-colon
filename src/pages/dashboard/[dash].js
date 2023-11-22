import React from 'react'
import dashLayout from '@/component/dashboard/component/dashLayout'




const Dash = ({ component, data }) => {
  console.log(component)
  return(
    <dashLayout data={data}/>
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

  console.log(params.dash)
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