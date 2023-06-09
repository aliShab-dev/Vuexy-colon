import styled from '@emotion/styled'
import { Height } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'
import React from 'react'



export const EmailReloading = styled.div({
  margin: 'auto'
})



export const EmailReload = () => {
  return (
    <EmailReloading>
          <CircularProgress sx={{color:'#685DD8'}} size={70}/>
    </EmailReloading>
  )
}
