import React from 'react'
import FormatItalicTwoToneIcon from '@mui/icons-material/FormatItalicTwoTone';
import FormatUnderlinedTwoToneIcon from '@mui/icons-material/FormatUnderlinedTwoTone';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import PlaylistAddTwoToneIcon from '@mui/icons-material/PlaylistAddTwoTone';
import PanoramaTwoToneIcon from '@mui/icons-material/PanoramaTwoTone';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';
import FormatBoldTwoToneIcon from '@mui/icons-material/FormatBoldTwoTone';
import FlagIcon from '@mui/icons-material/Flag';
import { Button, Stack, Typography } from '@mui/material'
import { EmailModalHeader } from '../../header/EmailModalHeader';
import { useSelector } from 'react-redux';
import { EmailBottonBOx, EmailIconBox, EmailInput } from '../index/modal/style';




export const EmailSendModal = () => {
  const detail = useSelector(state => (state.SentModal.data))

  return (
    <Stack
    bgcolor='background.default'
      justifyContent='start'
      width={'100%'}
      height={'100%'}
      sx={{
        padding: '15px',
        overflowY: 'scroll',
        gap: '15px',
        '::-webkit-scrollbar':{
          display: 'none'
        },
      }}
    >

     <Stack
      width={'100%'}
      bgcolor= 'background.paper'
      sx={{
        borderRadius: '6px'
      }}
      >
      
      <EmailModalHeader
        pic={detail.picture.thumbnail}
        detail={detail.name}
        />

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
     </Stack>


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
          fontWeight={700}>
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
    </Stack>
  )
}
