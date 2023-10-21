import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ContactModalHandler } from '../slicer/ContactModal'
import { handleIsContact, handleUser } from '../slicer/SelectedHandler'
import { StyledContact } from '../style/contactItem'
import { StyledBadge } from '../style/searchBar'


export const Connection = () => {
  const dispatch = useDispatch()
  const selectedUser = useSelector( state => state.ConteactSelector.user.name.last)
  const contacts = useSelector( state => state.Connnection.connection)
  
  return (
    <>
      {
        contacts.map(con => (
          
        <StyledContact
          direction='row'
          justifyContent='start'
          alignItems='center'
          spacing={1}
          key={con.name.last}
          selected={ selectedUser === con.name.last }
          onClick={() => {
            dispatch(handleUser(con))
            dispatch(handleIsContact(false))
            dispatch(ContactModalHandler(false))
          }}
          >
          <StyledBadge
            bgcolor={con.gender === 'male' ? '#EA5455': '#A8AAAE'}
            active={'none'}
            overlap="circular"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            variant="dot"
            >
            <Avatar
              alt={`${con.name.first} ${con.name.last}`}
              src={con.picture.thumbnail} sx={{
                width: 30,
                height: 30
              }} 
              />

          </StyledBadge>
      
          <Stack
            justifyContent="center"
            alignItems='start'
            spacing={0}
            >
            <Typography
              fontWeight={700}
              fontSize={12}
              variant='body1'
              component={'p'}
              color='text.icon'
              >
              {`${con.name.first} ${con.name.last}`}
            </Typography>
            
            <Typography
              fontSize={11}
              variant='body1'
              component={'p'}
              color='text.primary'
            >
              {con.job}
            </Typography>

          </Stack>
      
      </StyledContact>
        ))
      }
    </>

 )

}



