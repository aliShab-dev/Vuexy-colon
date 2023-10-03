import React from 'react'
import { Contacts } from "./contact/Contacts"
import styled from '@emotion/styled'
import { Header } from './chatBar/Header'
import { Paper } from '@mui/material'

const EmailContainer = styled(Paper)(props => ({
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
     height: '86vh',
    },
}))

export const ChatLayout = () => {

  return (
    <EmailContainer
      elevation={0}
      sx={{
        boxShadow: 5
      }}
     >
   
      <Contacts />

      <Header />
    
   </EmailContainer>
  )
}
