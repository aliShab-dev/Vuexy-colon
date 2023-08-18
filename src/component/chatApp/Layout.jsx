import React from 'react'
import { Contacts } from "./contact/Contacts"
import { MainBar } from "./chatBar/MainBar"
import { useSelector } from "react-redux"
import styled from '@emotion/styled'

const EmailContainer = styled.div(props => ({
  display :'flex',
  width: '100%',
  minWidth: 500,
  height: '84.7vh',
  position: 'relative',
  overflow: 'hidden',
  
  '::-webkit-scrollbar':{
    width:'0'
  },
  '@media(max-width:1200px)': {
    boxShadow: 'none',
     height: '86vh',
    },
}))


export const ChatLayout = () => {
  const showContactModal = useSelector(state => (state.ConatactModal.isOpen))
  
  
  return (
    <EmailContainer >
   
      <Contacts show={showContactModal}/>

      {/* <MainBar show={showContactModal}/> */}
      
   </EmailContainer>
  )
}
