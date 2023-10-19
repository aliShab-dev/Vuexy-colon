import { Skeleton, Stack } from '@mui/material'
import React from 'react'

export const EmailReload = ({num}) => {

  return (
    <>
    
      <Stack
        spacing={2}
        padding={2}
        >
        
        {  
          [...Array(num)].map( x => 
            <Stack
              key={Math.floor(Math.random() * 1000)}
              direction='row'
              justifyContent="space-between"
              alignItems="center"
              >
                
                <Skeleton
                  variant="circular"
                  width={35}
                  height={35}
                  sx={{
                    backgroundColor: theme => theme.palette.mode === 'dark'? 
                    null : '#c6c4cb'
                  }}/>

                <Skeleton
                  animation="wave" 
                  variant="rounded"
                  color='primary'
                  width={'93%'} height={35}
                  sx={{
                    backgroundColor: theme => theme.palette.mode === 'dark'? 
                    null : '#c6c4cb'
                  }}
                  />

            </Stack>
          )
        }
      </Stack>

    </>
  )
}
