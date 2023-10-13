import React from 'react'
import { useSelector } from 'react-redux'
import { EmailModalHeader } from '../../../../header/emailHeaders/emailModalHeader/EmailModalHeader'
import { Compose } from '../component/compose/Compose';
import { ShortLetter } from '../component/letters/shortLetter/ShortLetter';
import { LongLetter } from '../component/letters/longLetter/LongLetter';
import { Stack } from '@mui/material';

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
         detail={detail.name}
         cell={detail.cell}
         />

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
