import React from 'react'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { Avatar, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { MainBarContainer } from '../../../../styles/email/mainEmail/mailnEmail';
import { StyledBox } from './style/header';
import Massage from './chat/Massage';
import { Profile } from './profile/Profile';
import { ContactModalHandler } from '../contact/slicer/ContactModal';
import { useEffect } from 'react';
import { MainbarHeader, Wraped } from '@/component/header/mainBarHeader/MainbarHeader';


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

          <Stack
            direction='row'
            className="input">
            <Avatar                           
             alt="Remy Sharp"
             src={user.picture.thumbnail}
             sx={{ width: 35, height: 35 }}
             />
            <Stack
              alignItems='start'
              justifyContent={'center'}
              marginLeft={1}
              >
                <Typography
                  variant='body1'
                  fontWeight={700}
                  component={'p'}
                  fontSize={12}
                  color='text.primary'
                  >
                  {`${user.name.first} ${user.name.last}`}
                </Typography>

                <Typography
                  variant='body1'
                  component={'p'}
                  fontSize={10}
                  color='text.secondary'
                  >
                  {user.job}
                </Typography>
            </Stack>

          </Stack>

          <Stack
           direction={'row'}
           >
            <AddIcCallOutlinedIcon/>
            <VideocamOutlinedIcon/>
            <SearchIcon/>
            <MoreVertRoundedIcon/>
          </Stack>


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
