import { Button, Stack } from '@mui/material'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import React from 'react'
import { modalHandler } from '@/component/eMail/sideBar/SideBarModal';
import { useDispatch } from 'react-redux';

 export const MainbarHeader = ({
  component: Component, data
  }) => {
    const dispatch = useDispatch() 
    
  return ( 
    <Stack
      direction="row"
      justifyContent="start"
      alignItems="center"
      height={46}
      width={"100%"}
      sx={{
         borderBottom: '1px solid #434968',
         '@media(max-width:940px)': {
          '& .input':{
            marginLeft: 6
        }}
      }}
      >

      <Button
        color="icon"
        variant="outlined"
        className="leftBar-collapsed"
        onClick={() => dispatch((modalHandler(true)))}
        sx={{
          minWidth: 0,
          width: 32,
          height: 32,
          display: 'none',
          '@media(max-width:940px)': {
            display: 'flex',
            position: 'absolute',
            left: 15,
          },
        }}
        >

        <DensityMediumIcon
          color="icon"
          sx={{
            fontSize: 18
          }}
          />

      </Button>

      <Component data={data}/>    
      
    </Stack>
  )
}
