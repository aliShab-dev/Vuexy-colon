import React from 'react'
import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import Analytics from './Analytics'
import DashBoard from './Dashboard'


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



const dashLayout = ({ data }) => {
  return (props) => {
  
    return (
      <Container container spacing={1} >

        {
          component === "dashboard" ?
            <DashBoard {...props} {...data}/>
            :
            <Analytics {...props} {...data}/>
        }
        
      </Container>
    )
  }
}

export default dashLayout
