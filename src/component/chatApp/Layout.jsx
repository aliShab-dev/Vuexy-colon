import React from 'react'
import { EmailContainer } from "../../../styles/email/mainEmail/mailnEmail"
import { Contacts } from "./contact/Contacts"
import { MainBar } from "./chatBar/MainBar"
import { useSelector } from "react-redux"

export const ChatLayout = () => {
  const showContactModal = useSelector(state => (state.ConatactModal.isOpen))
  
  return (
    <EmailContainer >
      <Contacts show={showContactModal}/>
      <MainBar show={showContactModal}/>
    </EmailContainer>
  )
}
