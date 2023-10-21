import SearchIcon from '@mui/icons-material/Search';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormControlLabel, Switch, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import BlockIcon from '@mui/icons-material/Block';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import { Layout, ProfileBtn, ProfileContainer, ProfileItems, StyledImage } from '../style/profile';
import { addContact, deleteContact } from '../slicer/Contacts';
import { addConnect, deleteConnect } from '../slicer/Connnection';
import { handleIsContact } from '../../contact/slicer/SelectedHandler';
import { Blocked } from './blocked/blocked';
import { useEffect } from 'react';

export const Profile = () => {
  const [blocked, setBlocked] = useState(false)
  const dispatch = useDispatch() 
  const user = useSelector( state => state.ConteactSelector.user)

  useEffect(() => {
    setBlocked(false)
  },[user])
  

  return (
    <>
{ !blocked ?
    <ProfileContainer>

        <Layout>
          <StyledImage>
              <Image
                alt={`${user.name.first} ${user.name.last}`}
                src={user.picture.large}
                width={150}
                height={150}
                blurDataURL
                loading="lazy"
                style={{borderRadius: '50%',}}
                />
          </StyledImage>
        </Layout>

      <ProfileItems 
        justifyContent='center'
        alignItems='center'
        bgcolor='background.paper'
        first={'first'}
      >
          <Typography
            fontWeight={600}
            fontSize={18}
            variant='body1'
            component={'p'}
            >
            {`${user.name.first} ${user.name.last}`}
          </Typography>
  
          <Typography
            fontWeight={500}
            fontSize={15}
            variant='body1'
            component={'p'}
            >
            +91 336 5811
          </Typography>

          <Typography
            fontWeight={500}
            fontSize={15}
            variant='body1'
            component={'p'}
            >
            {user.job}
          </Typography>

      </ProfileItems >

      <ProfileItems
        direction='row'
        justifyContent='center'
        alignItems='center'
        bgcolor='background.paper'
        >
          <AddIcCallOutlinedIcon/>
          <VideocamOutlinedIcon/>
          <SearchIcon/>
      </ProfileItems>

      <ProfileItems 
        justifyContent='center'
        alignItems='center'
        bgcolor='background.paper'
        >
    
          <FormControlLabel
            required
            control={<Switch />}
            label={ 
              <Typography
                fontWeight={700}
                fontSize={15}
                variant='body1'
                component={'p'}
                >
                Custom Notifications
              </Typography>
            }
            labelPlacement="start"
            />

      </ProfileItems>

      <ProfileItems
        bgcolor='background.paper'
        >
          <ProfileBtn
            onClick={() => {
              dispatch(deleteConnect(user.name.first))
              dispatch(handleIsContact(true))
              dispatch(addContact(user))
            }}
            >
            
              <ChatRoundedIcon />

              <Typography
                fontWeight={700}
                fontSize={11}
                variant='body1'
                component={'p'}
                >
                  {` Text ${user.name.first}`}
              </Typography>
          
          </ProfileBtn>
            
          <ProfileBtn
            onClick={() => {
              dispatch(deleteConnect(user.name.first))
              setBlocked(true)
            }}
           >

              <BlockIcon  color={'#EA5455'}/>
              
              <Typography
                fontWeight={500}
                fontSize={12}
                variant='body1'
                component={'p'}
                >
                  {` Block ${user.name.first}`}
              </Typography>

          </ProfileBtn>

          <ProfileBtn>
            
              <FlagIcon />

              <Typography
                fontWeight={800}
                fontSize={12}
                variant='body1'
                component={'p'}
                >
                {` Report ${user.name.first}`}
              </Typography>
          </ProfileBtn>
      </ProfileItems>

     </ProfileContainer>
     :
     <Blocked />
}
    </>

  )
}
