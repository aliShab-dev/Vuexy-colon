import SearchIcon from '@mui/icons-material/Search';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { FormControlLabel, Switch, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import BlockIcon from '@mui/icons-material/Block';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import { Layout, ProfileBtn, ProfileContainer, ProfileItems, StyledImage } from '../style/profile';


export const Profile = () => {
  const user = useSelector( state => state.ConteactSelector.user)
  const mode = useSelector(state => (state.LightModeHandler.lightMode))

  return (
    <>
    <ProfileContainer>

      <Layout>
        <StyledImage>
            <Image alt={`${user.name.first} ${user.name.last}`} src={user.picture.large}  width={150} height={150} blurDataURL loading="lazy" style={{borderRadius: '50%',}} />
        </StyledImage>
      </Layout>

    <ProfileItems 
     lightMode={mode}
     first>
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
     row
     back
     lightMode={mode}>
      <AddIcCallOutlinedIcon/>
      <VideocamOutlinedIcon/>
      <SearchIcon/>
    </ProfileItems>

    <ProfileItems lightMode={mode}>
   
    <FormControlLabel
     required
     control={<Switch />}
     label={ 
      <Typography
        fontWeight={700}
        fontSize={11}
        variant='body1'
        component={'p'}
        >
        Custom NOtifications
      </Typography>
      }
     labelPlacement="start"
     />

    </ProfileItems>

    <ProfileItems lightMode={mode}>
    <ProfileBtn>
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
      
    <ProfileBtn >
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
    </>

  )
}
