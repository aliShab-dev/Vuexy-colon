import { Skeleton, Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const EmailReload = () => {
  const sideBar = useSelector((state) => (state.SideBar.name))

  return (
    <>
    {
    sideBar === 'inbox' ? (
    <Stack
      spacing={2}
      padding={2}
      >
      
    {  
        [...Array(10)].map( x => 

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
        )
        : 
        (
          
          <Stack
            spacing={2}
            padding={2}
            >
      
      {  
          [...Array(4)].map( x => 

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
      )
    }
    </>
  )
}
