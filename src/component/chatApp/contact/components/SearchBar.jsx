import { Avatar, Stack } from '@mui/material'
import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useSelector } from 'react-redux';
import { InputBox, StyledBadge } from '../style/searchBar';


export const SearchBar = () => {
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      bgcolor="background.paper"
      sx={{
        gap: '10px',
        width: '100%',
        padding: '8px 15px',
        borderBottom: '1px solid #434968',
        position:'sticky',
        top:'0',
        zIndex: 9
      }}
      >
        <StyledBadge
          active={'flex'}
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
          >
          <Avatar alt="Remy Sharp" src={user.picture.thumbnail} sx={{ width: 25, height: 25 }} />
        </StyledBadge>
        <InputBox>
          <SearchRoundedIcon color='icon'/>
          <input type="text" placeholder='Search...'/>
        </InputBox>

    </Stack> 
  )
}

const user = {
  name:{ first: 'Nathaniel', last: 'Davies'},
  picture:
  {large: 'https://randomuser.me/api/portraits/men/68.jpg', medium: 'https://randomuser.me/api/portraits/med/men/68.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/68.jpg'},
}
  
  