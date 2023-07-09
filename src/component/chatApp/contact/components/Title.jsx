import React from 'react'
import { TextSmallStrong } from '@/component/eMail/index/EmailDetailedModal';
import { StyledTitle } from '../style/title';




export const Title = ({title}) => {
  return (
    <StyledTitle>
    <TextSmallStrong color={'#6E63E5'}>
      {title}
    </TextSmallStrong>
  </StyledTitle>
  )
}
