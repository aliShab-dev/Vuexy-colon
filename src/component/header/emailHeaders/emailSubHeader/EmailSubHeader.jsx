import { Stack } from '@mui/system'
import React from 'react'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MarkEmailReadTwoToneIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone';
import NavigateNextTwoToneIcon from '@mui/icons-material/NavigateNextTwoTone';
import NavigateBeforeTwoToneIcon from '@mui/icons-material/NavigateBeforeTwoTone';
import { Typography } from '@mui/material';


export const EmailSubHeader = ({ data: sideBar }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        padding: 2,
        borderBottom: (theme) =>
        theme.palette.mode === 'dark' ? '1px solid #434978' : '1px solid #dbdade',
        width: '100%'
      }}
      >

      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        >
        <DeleteTwoToneIcon 
          color="icon"
          sx={{
            fontSize: 15,
            cursor: 'pointer'  
          }}
        />

        <MarkEmailReadTwoToneIcon
          color="icon"
          sx={{
            fontSize: 15,
            cursor: 'pointer'  
          }}
          />

        <FolderOpenTwoToneIcon
          color="icon"
          sx={{
            fontSize: 15,
            cursor: 'pointer'  
          }}/>

        <BookmarkTwoToneIcon
          color="icon"
          sx={{
            fontSize: 15,
            cursor: 'pointer'  
          }}
          />

      </Stack>

      <Stack 
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 15,
            color: 'icon',
            cursor: 'pointer'
          },
        }}
        >
    
          {
             sideBar !== 'inbox' ? (
              <Typography
              variant='body1'
              component='p'
              color='text.primary'
              fontSize={10}
              sx={{
                cursor: 'default'
              }}
             >
               1-2 OF 22
              </Typography>
              ) : (
                <Typography
                variant='body1'
                component='p'
                color='text.primary'
                fontSize={10}
                sx={{
                  cursor: 'default'
                }}
               >
                1-13 OF 130
              </Typography>
              )
          }
         
        <NavigateBeforeTwoToneIcon
         color='secondary'
         sx={{
          fontSize: 15,
         }}
        />

        <NavigateNextTwoToneIcon
         color='icon'
        />  

      </Stack>

  </Stack>
  )
}
