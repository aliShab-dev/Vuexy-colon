import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Massage from './chat/Massage';
import { Profile } from './profile/Profile';
import { ContactModalHandler } from '../contact/slicer/ContactModal';
import { useEffect } from 'react';
import { MainbarHeader } from '@/component/header/mainBarHeader/MainbarHeader';
import { ChatAppHeader } from '@/component/header/chatAppHeader/ChatAppHeader';
import { modalHandler } from '@/component/eMail/sideBar/SideBarModal';
import { Stack } from '@mui/system';

export const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector( state => state.ConteactSelector)
  const showSidebarModal = useSelector(state => (state.SideModal.isOpen))
 

  useEffect(() =>{
    dispatch(ContactModalHandler(false))
  },[])
  
  return (
    <Stack 
      alignItems='center'
      width={"100%"}
      height={"100%"}
      minWidth={500}
      elevation={0}
      bgcolor="background.paper"
      sx={{
        position: 'relative',
        opacity: 1,
        transition: '.2s ease' ,
        '@media(max-width:940px)': {
          opacity: showSidebarModal ? .4 : 1,
        },
      }}
      >

      <MainbarHeader
        component={ChatAppHeader}
        data={user.user}
        />

      <Stack
        bgcolor="background.default"
        alignItems="center"
        width={'100%'}
        height={'100%'}
        onClick={() => dispatch((modalHandler(false)))}
        sx={{
          overflow: 'scroll',
          position: 'relative',
          '::-webkit-scrollbar':{
            display: 'none'
          },
        }}
        >
        {
          user.isContact ? (<Massage />) : (<Profile />)
        }
      </Stack>
      
    </Stack>
  )
}
