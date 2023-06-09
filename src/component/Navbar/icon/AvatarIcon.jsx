import { Avatar, Icon } from '@mui/material'
import React from 'react'
import { setClose, setShow } from '@/Redux/NavbarTooltip'
import { useDispatch, useSelector } from 'react-redux'
import { StyledIcon } from './NavbarIcon'
import { NavbarTooltip } from '../tooltip/NavbarTooltip'

export const AvatarIcon = ({name}) => {
  const dispatch = useDispatch() 
  const showTooltip = useSelector((state) => state.NavbarTooltip.isShow)
  const tooltipName = useSelector((state) => state.NavbarTooltip.tooltipName)
  
  return (
    <StyledIcon>

    <Icon
      onMouseEnter={()=> dispatch(setShow(name))}
      onMouseLeave={() =>dispatch(setClose())}>

        <Avatar alt="Remy Sharp" src="/chat.png" sx={{ width: 24, height: 24 }} onMouseEnter={()=> dispatch(setShow(name))} onMouseLeave={() =>dispatch(setClose())}/>
        
    </Icon>

         {tooltipName === name && showTooltip && <NavbarTooltip />}
     
    </StyledIcon>

  )
}
