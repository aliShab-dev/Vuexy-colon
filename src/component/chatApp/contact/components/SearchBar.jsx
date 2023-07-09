import { Avatar } from '@mui/material'
import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { InputBox, StyledBadge, StyledSearchBar } from '../style/searchBar';


export const SearchBar = () => {
  return (
    <StyledSearchBar>
    <StyledBadge
      active={'flex'}
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
      >
      <Avatar alt="Remy Sharp" src={user.picture.thumbnail} sx={{ width: 25, height: 25 }} />
    </StyledBadge>
    <InputBox>
      <SearchRoundedIcon/>
      <input type="text" placeholder='Search...'/>
    </InputBox>

  </StyledSearchBar> 
  )
}

const user = {
  name:{ first: 'Nathaniel', last: 'Davies'},
  picture:
  {large: 'https://randomuser.me/api/portraits/men/68.jpg', medium: 'https://randomuser.me/api/portraits/med/men/68.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/68.jpg'},
}
  
  