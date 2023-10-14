import React from 'react'
import { Stack } from '@mui/material'
import { EmailModalHeader } from '../../../../header/emailHeaders/emailModalHeader/EmailModalHeader';
import { useSelector } from 'react-redux';
import { Compose } from '../component/compose/Compose';
import { ShortLetter } from '../component/letters/shortLetter/ShortLetter';

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
          cell={detail.cell}
          />

        <ShortLetter detail={detail}/>

      </Stack>

    <Compose detail={detail}/>

    </Stack>
  )
}
