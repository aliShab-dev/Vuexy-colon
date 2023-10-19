import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchEmail } from "@/component/eMail/mainBar/EmailData";
import { useEffect } from "react";
import { modalHandler } from '../sideBar/SideBarModal';
import { Stack } from "@mui/material";
import EmailAppHeader from '@/component/header/emailHeaders/emailAppHeader.jsx/EmailAppHeader';
import { MainbarHeader } from '@/component/header/mainBarHeader/MainbarHeader';
import { EmailSubHeader } from "@/component/header/emailHeaders/emailSubHeader/EmailSubHeader";


export const MainBar = () => {
  const dispatch = useDispatch() 

  const sideBar = useSelector((state) => (state.SideBar.name))
  const showSidebarModal = useSelector(state => (state.SideModal.isOpen))
  
  useEffect(() =>{
    dispatch(fetchEmail(sideBar === 'inbox' ? 12 : 4))
  },[sideBar])

  useEffect(() =>{
    dispatch(modalHandler(false))
  },[])

  return(
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
        component={EmailAppHeader}
        data={sideBar}
        />

      <EmailSubHeader data={sideBar}/>
        
    
  </Stack>
)
}