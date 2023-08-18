import { Icon, Collapse, List, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import { StyledListItemButton } from '../../leftbar';

export const CollapseComponent = ({index, items, }) => {
  const selectedIndex = useSelector(state => (state.AccordianSlicer.selectedIndex))
  const open = useSelector(state => (state.AccordianSlicer.isOpen))

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

            <StyledListItemButton
              key={`${item.name} ${index}`}
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
                color='text.primary'
                fontSize={10}
                fontWeight={300}
              >

                {item.name}
                
              </Typography>
              
            </StyledListItemButton>

        )) 
        }
        
      </List>

    </Collapse>
  )
}
