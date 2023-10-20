import React from 'react'
import { Typography } from '@mui/material';
import styled from '@emotion/styled';


export const StyledTitle = styled.div( props => ({
  display: 'flex',
  justifyContent: 'start',
  padding: '10px 5px',
  width: '100%',
  marginTop: '5px'
}))

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
