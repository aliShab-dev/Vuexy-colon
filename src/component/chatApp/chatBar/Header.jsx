import React from 'react'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { Avatar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useDispatch, useSelector } from 'react-redux';
import { MainBarContainer } from '../../../../styles/email/mainEmail/mailnEmail';
import { ContactInfo } from '../contact/style/contactItem';
import { StyledBox } from './style/header';
import Massage from './chat/Massage';
import { Profile } from './profile/Profile';
import { ContactModalHandler } from '../contact/slicer/ContactModal';
import { useEffect } from 'react';


export const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector( state => state.ConteactSelector.user)
  const showContactModal = useSelector(state => (state.ConatactModal.isOpen))

  useEffect(() =>{
    dispatch(ContactModalHandler(false))
  },[])

  return (

    <MainBarContainer 
      alignItems='center'
      width={"100%"}
      height={"100%"}
      minWidth={500}
      show={showContactModal}
      elevation={0}
      bgcolor="background.paper"
      >
       {/* fix this divs  */}
        <div className="header">
          <button
          className="leftBar-collapsed"
          onClick={() => dispatch((ContactModalHandler(true)))}
          >
            <DensityMediumIcon />
          </button>
          <div className="input">
          <Avatar alt="Remy Sharp" src={user.picture.thumbnail} sx={{ width: 26, height: 26 }} />

        <ContactInfo>

          <Typography
            variant='body1'
            component={'p'}
            fontSize={11}
            color='text.primary'
            >
             {`${user.name.first} ${user.name.last}`}
          </Typography>

          <Typography
            variant='body1'
            component={'p'}
            fontSize={11}
            color='text.primary'
            >
            {user.job}
          </Typography>
          
        </ContactInfo>

          </div>

          <div className="options">
            <AddIcCallOutlinedIcon/>
            <VideocamOutlinedIcon/>
            <SearchIcon/>
            <MoreVertRoundedIcon/>
          </div>
      </div>

      <StyledBox
       bgcolor="background.default"
       alignItems="center"
       width={'100%'}
       height={'100%'}
       onClick={() => dispatch((ContactModalHandler(false)))}
       >
        {
          user.comment ? (<Massage />) : (<Profile />)
        }
      </StyledBox>
      
    </MainBarContainer>
  )
}
