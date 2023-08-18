import React from 'react'
import { Icon, Stack, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { indexHandler } from './AccordianSlicer';
import { StyledAccordian } from '../../leftbar';



export const Accordian = ({item, show, selected, index}) => {
  const dispatch = useDispatch()
  const selectedIndex = useSelector(state => (state.AccordianSlicer.selectedIndex))
  const open = useSelector(state => (state.AccordianSlicer.isOpen))

  return (
    <StyledAccordian
        setclose={show}
        selected={selected}
        onClick={()=> dispatch(indexHandler(index))}
        >
          <Stack
           component='div'
           direction="row"
           justifyContent="start"
           alignItems="center"
           >

              <Icon>
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

          </Stack>

          <Stack>

              {
                open && selectedIndex === index? (
                  <ExpandMoreIcon
                    color="icon"
                    className="icon"
                    sx={{fontSize: 18}}
                    />
                  ) : (
                  <NavigateNextIcon
                    color="icon"
                    className="icon"
                    sx={{fontSize: 18}}
                    />
                )
              }

          </Stack>
                    
    </StyledAccordian >
  )
}
     