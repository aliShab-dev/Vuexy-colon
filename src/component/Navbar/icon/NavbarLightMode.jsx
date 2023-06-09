import { setClose, setShow } from '@/Redux/NavbarTooltip'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { NavbarTooltip } from '../tooltip/NavbarTooltip';
import { ModeHandler } from '@/Redux/LightModeHandler';
import { StyledIcon } from './NavbarIcon';




export const NavbarLightMode = () => {
  const dispatch = useDispatch() 
  const lightMode = useSelector((state) => (state.LightModeHandler.lightMode))
  const showTooltip = useSelector((state) => state.NavbarTooltip.isShow)
  const tooltipName = useSelector((state) => state.NavbarTooltip.tooltipName)
  
  return (
  
      <StyledIcon onClick={() => dispatch(ModeHandler())} onMouseEnter={()=> dispatch(setShow(`${lightMode ? 'Light':'Dark'} Mode`))}
      onMouseLeave={() =>dispatch(setClose())}>
            { lightMode ? <LightModeIcon /> : <DarkModeIcon />}
       
            {tooltipName === `${lightMode ? 'Light':'Dark'} Mode` && showTooltip && <NavbarTooltip/>}
  
      </StyledIcon>
  
  )
}
