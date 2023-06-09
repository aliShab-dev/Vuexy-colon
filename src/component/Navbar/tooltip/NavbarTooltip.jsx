import styled from '@emotion/styled'
import React from 'react'
import { useSelector } from 'react-redux'


export const StyledTooltip = styled.div({
  position: 'absolute',
  backgroundColor: '#25293C',
  top: 35,
  right: -15,
  zIndex: 50,
  cursor: 'default',
  borderRadius: 5,
  padding: '2px 4px',
  minWidth: 60
})

export const TextSecondrySmall = styled.span(props => ({
  color: '#C6CAE3',
  fontSize: 10,
  fontWeight: 400,
}))

export const NavbarTooltip = () => {
  const tooltipName = useSelector((state) => state.NavbarTooltip.tooltipName)
  
  return (
    <StyledTooltip>
      <TextSecondrySmall>
        {tooltipName}
      </TextSecondrySmall>
    </StyledTooltip>
  )
}
