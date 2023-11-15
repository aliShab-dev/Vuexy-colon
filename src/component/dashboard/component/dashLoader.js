import React from 'react'
import { Grid } from '@mui/material'

const dashLoader = (Component, xs, sm, md) => {
  return (props) => {
  
    return (
      <Grid
        item
        xs={xs}
        sm={sm}
        md={md}
        >
        <Component {...props} />
      </Grid>
    )
  }
}

export default dashLoader