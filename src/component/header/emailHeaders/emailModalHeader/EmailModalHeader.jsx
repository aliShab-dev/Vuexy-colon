import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch } from 'react-redux';
import { CloseEmailModal } from '@/component/eMail/index/EmailModalSlicer';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import CloseIcon from '@mui/icons-material/Close';
import { CloseSentModal } from '@/component/eMail/index/modal/sentModal/EmailSentModal';
import { deleteEmail } from '@/component/eMail/mainBar/EmailData';

export const EmailModalHeader = ({detail, pic, cell}) => {
  const dispatch = useDispatch()

  return (
      <Stack
        justifyContent='space-between'
        flexDirection='row'
        alignItems='center'
        sx={{
          padding: '5px 15px',
        }}>
        <Stack flexDirection='row'>
          <Avatar sx={{width:'40px', height: '40px'}}  alt='user picture' src={pic} />

          <Stack
            justifyContent='center'
            sx={{
              marginLeft: '8px',
              color: '#717AB0',
            }}
            > 
          
            <Typography
             color='text.icon'
             fontSize={13}
             fontWeight={800}
             >
              {`${detail.first} ${detail.last}`}
            </Typography>

            <Typography
              color='text.secondary'
              fontSize={11}
              fontWeight={400}
              >
              Recruter at Amazon
            </Typography>

          </Stack>
        </Stack>

        <Stack
          flexDirection='row'
          alignItems='center'
          position='relative'
          >

          <DoNotDisturbIcon 
            onClick={() => {
              dispatch(deleteEmail(cell))
              dispatch(CloseSentModal())
              dispatch(CloseEmailModal())
            }}
            color='icon'
            sx={{
              fontSize: 15,
              position: 'relative',
              cursor: 'pointer',
              }}
            />
          <MoreVertIcon
            color='icon'
            sx={{
              fontSize: 15,
              position: 'relative',
              cursor: 'pointer',
              }}/>
          <CloseIcon
            color='icon'
            sx={{
              fontSize: 18,
              position: 'relative',
              cursor: 'pointer',
              }}
            onClick={() => {
              dispatch(CloseSentModal())
              dispatch(CloseEmailModal())
            }}
              />
            
          <Stack
            boxShadow={3}
            bgcolor='background.paper'
            sx={{
                display: 'none',
                position: 'absolute',
                right: '5px',
                bottom: '-45px',
            }}
            >

            <Typography
              color='icon'
              fontSize={11}
              fontWeight={500} 
              >
              View More
            </Typography>

            <Typography
              color='icon'
              fontSize={11}
              fontWeight={500} 
              >
              delete
            </Typography>

          </Stack>

        </Stack>

    </Stack>
    )
}
