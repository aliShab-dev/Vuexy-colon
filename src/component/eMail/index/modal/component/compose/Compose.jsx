import React from 'react'
import FormatItalicTwoToneIcon from '@mui/icons-material/FormatItalicTwoTone';
import FormatUnderlinedTwoToneIcon from '@mui/icons-material/FormatUnderlinedTwoTone';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import PlaylistAddTwoToneIcon from '@mui/icons-material/PlaylistAddTwoTone';
import PanoramaTwoToneIcon from '@mui/icons-material/PanoramaTwoTone';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';
import FormatBoldTwoToneIcon from '@mui/icons-material/FormatBoldTwoTone';
import { Button, Stack, Typography } from '@mui/material';

export const Compose = ({detail}) => {
  return (
    <Stack 
      width={'100%'}
      bgcolor= 'background.paper'
      sx={{
        borderRadius: '6px'
      }}
      >
    <Stack
      sx={{
        padding: 1,
        gap: 1
      }}
    >
      <Typography
        color='text.icon'
        fontSize={12}
        fontWeight={700}
        >
        Reply to{` ${detail.name.first} ${detail.name.last}`}
      </Typography>

      <Stack
        flexDirection='row'
        alignItems='center'
        justifyContent='start'
        sx={{
          gap: 1,
          '& .MuiSvgIcon-root': {
            fontSize: 18,
            cursor: 'pointer',
          },
        }}
      >
        <FormatBoldTwoToneIcon color='icon'/>
        <FormatItalicTwoToneIcon color='icon'/>
        <FormatUnderlinedTwoToneIcon color='icon'/>
        <ListTwoToneIcon color='icon'/>
        <PlaylistAddTwoToneIcon color='icon'/>
        <PanoramaTwoToneIcon color='icon'/>
      </Stack>

      <Stack
        width='100%'
        height='50px'
        sx={{
          padding: 1,
          '& input':{
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'text.primary',
            fontSize: 13,
            
            '&::placeholder':{
              color: 'text.light',
              fontSize: 12
            }
          }
        }}
        >
      <input
        type="text"
        placeholder='write your massage'
        />
      
    </Stack>

      <Stack
        justifyContent='space-between'
        alignItems='center'
        flexDirection='row'
        sx={{
          gap: 1,
          alignSelf: 'end',
          "& .MuiButtonBase-root": {
            width: '100px',
            fontSize: '10px'
          }
        }}
        >
          <Button variant="text">
            <AttachmentRoundedIcon
              sx={{
                marginRight: '10px',
                fontSize:'15px'
              }}
              />
            Text
          </Button>

          <Button variant="contained">
            <SendRoundedIcon
            sx={{
              marginRight: '5px',
              fontSize:'15px'
              }}
              />
              Contained
          </Button>

     </Stack>

    </Stack> 
   
 </Stack>
  )
}
