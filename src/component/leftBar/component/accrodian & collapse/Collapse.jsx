import { Icon, Collapse, List, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import { StyledListItemButton } from '../../leftbar';
import Link from 'next/link';
import { btnHandler } from '../button/ButtonSlicer';
import { useRouter } from 'next/router';

export const CollapseComponent = ({index, items }) => {
  const dispatch = useDispatch()
  const selectedIndex = useSelector(state => (state.AccordianSlicer.selectedIndex))
  const open = useSelector(state => (state.AccordianSlicer.isOpen))
  const selectedBtn = useSelector(state => (state.ButtonSlicer.selectedBtn)) 
  const router = useRouter() 
  console.log(router.query)

  return (
    <Collapse
     sx={{backgroundColor: 'inherit'}}
     in={open && selectedIndex === index && open}
     timeout="auto"
     unmountOnExit
     >

      <List
       component="ul"
       disablePadding
       >
        {
        items.map(item => (

          <Link
            key={`${item.name} ${index}`}
            href={item.to}
            > 

            <StyledListItemButton
              selected={item.to === selectedBtn}
              onClick={() => dispatch(btnHandler(item.to))}
              sx={{ pl: 4 }}
              >

              <Icon
                sx={{width: 8,
                  marginLeft: 1,
                  marginRight: 1
                  }}
               >

                <HdrStrongIcon
                  fontSize="small"
                  color="icon"
                  />

              </Icon>

              <Typography
                variant='subtitle1'
                component='span'
                color={item.to === selectedBtn? 'white' : 'text.icon'}
                fontSize={10}
                fontWeight={300}
              >

                {item.name}
                
              </Typography>
              
            </StyledListItemButton>
          </Link>

        )) 
        }
        
      </List>

    </Collapse>
  )
}
