import { EmailContainer } from "../../../styles/email/mainEmail/mailnEmail"


import React from 'react'
import { Contacts } from "./contact/Contacts"
import { MainBar } from "./chatBar/MainBar"

export const ChatLayout = () => {
  return (
    <EmailContainer>
      <Contacts/>
      <MainBar/>
    </EmailContainer>
  )
}
