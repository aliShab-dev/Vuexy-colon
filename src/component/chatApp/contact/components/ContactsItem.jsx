import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ContactModalHandler } from '../slicer/ContactModal'
import { handleIsContact, handleUser } from '../slicer/SelectedHandler'
import { StyledContact } from '../style/contactItem'
import { StyledBadge } from '../style/searchBar'


export const ContactItem = () => {
  const dispatch = useDispatch()
  const selectedUser = useSelector( state => state.ConteactSelector.user.name.last)
  const users = useSelector( state => state.Contacts.contacts)
  const contacts = useSelector( state => state.Connnection.connection)
  return (
    <>
    {
      users.map(user => (
      <StyledContact
        direction='row'
        justifyContent='start'
        alignItems='center'
        spacing={1}
        key={user.name.last}
        selected={ selectedUser === user.name.last }
        onClick={() => {
          dispatch(handleUser(user))
          dispatch(handleIsContact(true))
          dispatch(ContactModalHandler(false))
        }}
        >
      <StyledBadge
        bgcolor={user.gender === 'male' ? '#EA5455': '#A8AAAE'}
        active={'none'}
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        >
        <Avatar
         alt={`${user.name.first} ${user.name.last}`}
         src={user.picture.thumbnail}
         sx={{ width: 30, height: 30 }}
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
            {`${user.name.first} ${user.name.last}`}
         </Typography>
          
        <Typography
          fontSize={11}
          variant='body1'
          component={'p'}
          color='text.primary'
        >
          {user.comment || `Start Texting ${user.name.first}`} 
        </Typography>

      </Stack>

      <div className='date'>
      <Typography
        fontSize={10}
        fontWeight={300}
        variant='body1'
        component={'p'}
        color='text.primary'
       >
          {user.gender === 'female' ? "10 Minutes" : '5 Minutes'}
        </Typography>
      </div>
   </StyledContact>
    ))
  }
  </>
    
  )
}

