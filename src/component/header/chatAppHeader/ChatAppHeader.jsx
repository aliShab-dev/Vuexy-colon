import React from 'react'
import { Avatar, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import BlockIcon from '@mui/icons-material/Block';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import { useDispatch } from 'react-redux';
import { deleteContact } from '@/component/chatApp/chatBar/slicer/Contacts';

export const ChatAppHeader = ({data:user}) => {
  const dispatch = useDispatch()
  
  return (
    <Stack
      className="child"
      direction='row'
      width={'100%'}
      justifyContent={'space-between'}
      padding={1}
      >
      <Stack
        direction={'row'}
        alignItems={'center'}
        gap={1}
        >
        <Avatar                           
          alt="Remy Sharp"
          src={user.picture.thumbnail}
          sx={{ width: 33, height: 33 }}
          />
        <Stack
          alignItems='start'
          justifyContent={'center'}
          >
            <Typography
              variant='body1'
              fontWeight={700}
              component={'p'}
              fontSize={13}
              color='text.icon'
              >
              {`${user.name.first} ${user.name.last}`}
            </Typography>

            <Typography
              variant='body1'
              component={'p'}
              fontSize={11}
              color='text.secondary'
              >
              {user.job}
            </Typography>
        </Stack>
      </Stack>

        
      <Stack
        direction={'row'}
        alignItems={'center'}
        gap={1}
        >
          <AddIcCallOutlinedIcon
            sx={{fontSize: 20, cursor: 'pointer'}}
            color='icon'
            />
          <VideocamOutlinedIcon
            sx={{fontSize: 20, cursor: 'pointer'}}
            color='icon'
            />
          <BlockIcon
            onClick={() => dispatch(deleteContact(user.name.last))}  
            sx={{fontSize: 20, cursor: 'pointer'}}
            color='icon'
            />
          <MoreVertRoundedIcon
            sx={{fontSize: 20, cursor: 'pointer'}}
            color='icon'
            />
      </Stack>

    </Stack>
  )
}
