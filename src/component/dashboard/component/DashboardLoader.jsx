import { Grid } from '@mui/material'
import React from 'react'

/// HOC ///

export const dashboardLoader = Component => {
  return (props) => {
    console.log(props)
    return (
      <Grid item xs={3} >
        <Component {...props} />
      </Grid>
    )
  }
}
