import React from 'react'
import { StyledTitle } from '../style/title';
import { Typography } from '@mui/material';

export const Title = ({title}) => {
  return (
    <StyledTitle>
      <Typography
      fontWeight={700}
       variant='h7' 
       component='p' 
       sx={{
        color:'text.primary'
       }}>
        {title}
       </Typography>

  </StyledTitle>
  )
}
