import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';
import FlagIcon from '@mui/icons-material/Flag';

export const ShortLetter = ({detail}) => {
  return (
      <Stack
        justifyContent='space-between'
        alignItems='start'
        sx={{
          gap: '15px',
          padding: '5px 15px',
          width: '100%'
        }}
        >
          <Typography
            color='text.secondary'
            fontSize={12}
           >
            Greetings!
          </Typography>


          <Typography
           color='text.secondary'
           fontWeight={500}
           fontSize={12}
           >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex rerum consequuntur optioci?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est rem odit porro!<br/>
            <br/>
              similique provident quod autem sint iusto magni error assumenda hic sit nobis amet necessitatibus.
          </Typography>
  
          <Typography
           color='text.secondary'
           fontSize={12}
            >
            Sincerely yours,
            {`${detail.name.first} ${detail.name.last}`}
          </Typography>
          
          <Typography
           color='icon'
           fontSize={14}
           fontWeight={500}
           sx={{display:"flex",alignItems:'center'}}
           >
            <AttachmentRoundedIcon
              sx={{
                marginRight: '5px',
                fontSize: 18}}
              />
            Attachments
          </Typography>

          <Typography
           color='icon'
           fontSize={14}
           fontWeight={500}
           sx={{
            display:"flex",
            alignItems:'center'
           }}
            >
            <FlagIcon
              sx={{
                marginRight: '5px',
                fontSize:'15px'}}
                />
            report
          </Typography>
       </Stack>
  )
}
