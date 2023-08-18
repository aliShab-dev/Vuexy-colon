import React from 'react'
import { TextSmallStrong } from '@/component/eMail/index/modal/EmailDetailedModal';
import { StyledTitle } from '../style/title';
import { Typography } from '@mui/material';




export const Title = ({title}) => {
  return (
    <StyledTitle>
      <Typography
       variant='h5' 
       component='p' 
       sx={{
        color:'text.primary'
       }}>
        {title}
       </Typography>
    {/* <TextSmallStrong size={12} color={'#6E63E5'}>
      {title}
    </TextSmallStrong> */}
  </StyledTitle>
  )
}
