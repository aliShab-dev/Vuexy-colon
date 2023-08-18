import { Icon, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledListItemButton } from '../../leftbar'
import { btnHandler } from './ButtonSlicer'


export const Button = ({item, show,}) => {

  const dispatch = useDispatch()
  const selectedBtn = useSelector(state => (state.ButtonSlicer.selectedBtn)) 
  
  return (
    <Link href={`/${item.id}`}>

    <StyledListItemButton
     setclose={show}
     selected={item.id === selectedBtn}
     onClick={() => dispatch(btnHandler(item.id))}
     >
      <Icon >
          {item.icon}
      </Icon>

      <Typography
        variant='subtitle1'
        component='p'
        color='text.icon'
        fontSize={11}
        fontWeight={300}
        > 

        {item.name}

      </Typography>

    </StyledListItemButton>

  </Link>
  )
}

