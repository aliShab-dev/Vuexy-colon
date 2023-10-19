import React from 'react'
import { Avatar, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import SearchIcon from '@mui/icons-material/Search';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';

export const ChatAppHeader = ({data:user}) => {
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
              color='text.primary'
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
          <SearchIcon
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
