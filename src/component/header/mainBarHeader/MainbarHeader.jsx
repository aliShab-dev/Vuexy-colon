import { Button, Stack } from '@mui/material'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import React from 'react'

 export const MainbarHeader = ({childern}) => {
  console.log(childern)
  return ( 
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width={"100%"}
      >
      <Button
        color="icon"
        variant="outlined"
        className="leftBar-collapsed"
        onClick={() => dispatch((modalHandler(true)))}
        sx={{
          minWidth: 0,
          width: '10px',
        }}
        >

        <DensityMediumIcon
          color="icon"
          sx={{
            fontSize: 13
          }}
          />

      </Button>
      {childern}
      
    </Stack>
  )
}
