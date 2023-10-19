
import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ContactModalHandler } from '../slicer/ContactModal'
import { handleUser } from '../slicer/SelectedHandler'
import { StyledContact } from '../style/contactItem'
import { StyledBadge } from '../style/searchBar'


const contacts = [
  {name:{title: 'Mrs', first: 'Abby', last: 'Barrett'},
  gender:"male", 
  job: 'MySQL/MongoDB',
  picture:
  {large: 'https://randomuser.me/api/portraits/women/76.jpg', medium: 'https://randomuser.me/api/portraits/med/women/76.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/76.jpg'}},
  { name:{ title: 'Mr', first: 'Shaurya', last: 'Gupta'},
  job: 'Back-End Developer',
   picture:
   {large:"https://randomuser.me/api/portraits/men/79.jpg",medium:
     "https://randomuser.me/api/portraits/med/men/79.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/79.jpg"}},
 
  { name: {title: 'Ms', first: 'Brooke', last: 'Matthews'},
  gender:"female", 
  job: 'Front-End Developer',
   picture:
   {large: 'https://randomuser.me/api/portraits/women/63.jpg', medium: 'https://randomuser.me/api/portraits/med/women/63.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/63.jpg'}},
 
   {name:{title: 'Mrs', first: 'Samantha', last: 'Martin'},
   job: 'Front-End Developer',
   picture:
   {large: 'https://randomuser.me/api/portraits/women/79.jpg', medium: 'https://randomuser.me/api/portraits/med/women/79.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/79.jpg'}},
 
  { name:{title: 'Mr', first: 'Özkan', last: 'Demirbaş'},
  job: 'Back-End Developer',
   picture:
   {large: 'https://randomuser.me/api/portraits/men/23.jpg', medium: 'https://randomuser.me/api/portraits/med/men/23.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/23.jpg'}},
 
   {name:{title: 'Mr', first: 'Alfredo', last: 'Serrano'},
   gender:"male", 
   job: 'Node JS Developer',
   picture:
   {large: 'https://randomuser.me/api/portraits/men/14.jpg', medium: 'https://randomuser.me/api/portraits/med/men/14.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/14.jpg'}},
 
  { name:{title: 'Miss', first: 'Ana Luisa', last: 'Díaz'},
  job: 'Django Developer',
   picture:
   {large: 'https://randomuser.me/api/portraits/women/77.jpg', medium: 'https://randomuser.me/api/portraits/med/women/77.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/77.jpg'}},
 
   {name:{title: 'Mr', first: 'Glen', last: 'Fowler'},
   gender:"male", 
   job: 'Front-End Developer',
   picture:
   {large: 'https://randomuser.me/api/portraits/men/67.jpg', medium: 'https://randomuser.me/api/portraits/med/men/67.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/67.jpg'}},
 
   {name:{title: 'Mr', first: 'Jeppe', last: 'Madsen'},
   gender:"female", 
   job: 'Back-End Developer',
   picture:
   {large: 'https://randomuser.me/api/portraits/men/93.jpg', medium: 'https://randomuser.me/api/portraits/med/men/93.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/93.jpg'}},
 
  {name:{title: 'Mrs', first: 'Linnea', last: 'Ollila'},
  gender:"male", 
  job: 'Front-End Developer',
   picture:
   {large: 'https://randomuser.me/api/portraits/women/80.jpg', medium: 'https://randomuser.me/api/portraits/med/women/80.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/80.jpg'}},
    {gender:"male", 
    name:{first: 'دارا', last: 'علی'},
    job: 'Front-End Developer',
    picture:
    {large: 'https://randomuser.me/api/portraits/men/91.jpg', medium: 'https://randomuser.me/api/portraits/med/men/91.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/91.jpg'},
  }
]

export const Connection = () => {
  const dispatch = useDispatch()
  const selectedUser = useSelector( state => state.ConteactSelector.user.name.last)
  const mode = useSelector(state => (state.LightModeHandler.lightMode))
  
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
      dispatch(ContactModalHandler(false))
    }}
     >
    <StyledBadge
      bgcolor={con.gender === 'male' ? '#EA5455': '#A8AAAE'}
      active={'none'}
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
      >
      <Avatar
        alt={`${con.name.first} ${con.name.last}`}
        src={con.picture.thumbnail} sx={{ width: 30, height: 30 }} 
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



