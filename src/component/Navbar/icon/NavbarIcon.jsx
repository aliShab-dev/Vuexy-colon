import { setClose, setShow } from '@/Redux/NavbarTooltip'
import styled from '@emotion/styled'
import { Icon } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavbarTooltip } from '../tooltip/NavbarTooltip';
import ListIcon from '@mui/icons-material/List';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';


export const StyledIcon = styled.div({
  position: 'relative',

  '& .MuiSvgIcon-root': {
    color: '#ACB4D7',
    cursor: 'pointer'
  },
})

export const NavbarIcon = ({name}) => {

  const dispatch = useDispatch() 
  const showTooltip = useSelector((state) => state.NavbarTooltip.isShow)
  const tooltipName = useSelector((state) => state.NavbarTooltip.tooltipName)
  
  return (

     <StyledIcon>

     <Icon  onMouseEnter={()=> dispatch(setShow(name))}
            onMouseLeave={() =>dispatch(setClose())}>
            {name === 'List Items' && <ListIcon />}  
            {name === 'Notifications'&&  <NotificationImportantIcon />  }  
     </Icon>

          {tooltipName === name && showTooltip && <NavbarTooltip />}
      
     </StyledIcon>

  )
}
