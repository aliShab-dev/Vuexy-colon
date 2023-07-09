import React from 'react'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { Avatar } from '@mui/material';
import { TextSecondry, TextSmall } from '@/component/eMail/index/EmailDetailedModal';
import SearchIcon from '@mui/icons-material/Search';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import { useSelector } from 'react-redux';
import { MainBarContainer } from '../../../../styles/email/mainEmail/mailnEmail';
import { ContactInfo } from '../contact/style/contactItem';
import { StyledBox } from './style/header';
import Massage from './chat/Massage';
import { Profile } from './profile/Profile';





export const Header = () => {
  const user = useSelector( state => state.ConteactSelector.user)
  return (
    <MainBarContainer>
        <div className="header">
        <div className="input">
        <Avatar alt="Remy Sharp" src={user.picture.thumbnail} sx={{ width: 26, height: 26 }} />

      <ContactInfo>
        <TextSecondry > {`${user.name.first} ${user.name.last}`}</TextSecondry>
        <TextSmall>{user.job}</TextSmall>
      </ContactInfo>

        </div>

        <div className="options">
          <AddIcCallOutlinedIcon/>
          <VideocamOutlinedIcon/>
          <SearchIcon/>
          <MoreVertRoundedIcon/>
        </div>
      </div>

      <StyledBox backColor={'#25293C'}>
        {
          user.comment ? (<Massage />) : (<Profile />)
        }
      </StyledBox>
      
    </MainBarContainer>
  )
}
