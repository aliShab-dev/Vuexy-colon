import { TextSecondry, TextSmall } from '@/component/eMail/index/modal/inboxModal/EmailDetailedModal'
import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ContactModalHandler } from '../slicer/ContactModal'
import { handleUser } from '../slicer/SelectedHandler'
import { ContactInfo, StyledContact } from '../style/contactItem'
import { StyledBadge } from '../style/searchBar'



const users = [
  {gender:"female",
  name:{first: 'Paula', last: 'Pérez'},
  comment: 'how can I buy it from...',
  job: 'MySQL/MongoDB',
  picture:
  {large: 'https://randomuser.me/api/portraits/women/82.jpg', medium: 'https://randomuser.me/api/portraits/med/women/82.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/82.jpg'}
  },
  {
  gender:"male", 
  name:{first: 'بردیا', last: 'علیزاده'},
  comment: 'I am intrested how do you...',
  job: 'Djanjo Developer',
  picture:
  {large: 'https://randomuser.me/api/portraits/men/91.jpg', medium: 'https://randomuser.me/api/portraits/med/men/91.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/91.jpg'},
  },
  {
  gender:"male",
  name:{first: 'Matt', last: 'Murray'},
  comment: 'can you help me with React...',
  job: 'Front-End Devloper',
  picture:
  {large: 'https://randomuser.me/api/portraits/men/43.jpg', medium: 'https://randomuser.me/api/portraits/med/men/43.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/43.jpg'}
  }
  ]


export const ContactItem = () => {
  const dispatch = useDispatch()
  const selectedUser = useSelector( state => state.ConteactSelector.user.name.last)

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
          dispatch(ContactModalHandler(false))
        }}
        >
      <StyledBadge
        bgColor={user.gender === 'male' ? '#EA5455': '#A8AAAE'}
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
          {user.comment}
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

