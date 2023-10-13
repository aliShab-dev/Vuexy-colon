import React from 'react'
import { useSelector } from 'react-redux'
import { EmailModalHeader } from '../../../../header/EmailModalHeader'
import FormatBoldTwoToneIcon from '@mui/icons-material/FormatBoldTwoTone';
import FormatItalicTwoToneIcon from '@mui/icons-material/FormatItalicTwoTone';
import FormatUnderlinedTwoToneIcon from '@mui/icons-material/FormatUnderlinedTwoTone';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import PlaylistAddTwoToneIcon from '@mui/icons-material/PlaylistAddTwoTone';
import PanoramaTwoToneIcon from '@mui/icons-material/PanoramaTwoTone';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';
import FlagIcon from '@mui/icons-material/Flag';
import { Button, Stack } from '@mui/material'
import { EmailBottonBOx, EmailBox, EmailIconBox, EmailInput, ModalBox, Overlay, TextSecondry, TextSmall, TextSmallStrong } from '../style';
import { Compose } from '../component/compose/Compose';
import { ShortLetter } from '../component/letters/shortLetter/ShortLetter';
import { LongLetter } from '../component/letters/longLetter/LongLetter';



export const EmailDetailedModal = () => {
  const detail = useSelector(state => (state.EmailModal.data))

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
         detail={detail.name}/>

        <LongLetter detail={detail} />

       </Stack>

       <Stack
        width={'100%'}
        bgcolor= 'background.paper'
        sx={{
          borderRadius: '6px'
        }}
        >
        
        <EmailModalHeader
         pic={detail.picture.thumbnail}
         detail={detail.name}/>


        <ShortLetter detail={detail} />
       </Stack>

       
       
        <Compose detail={detail}/>
   
    </Stack>
    )
}
