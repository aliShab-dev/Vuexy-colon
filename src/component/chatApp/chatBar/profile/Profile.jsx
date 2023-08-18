import { TextSecondry, TextSmall, TextSmallStrong } from '@/component/eMail/index/modal/EmailDetailedModal'
import SearchIcon from '@mui/icons-material/Search';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { FormControlLabel, Switch } from '@mui/material';
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
      <TextSmallStrong size={20}>
        {`${user.name.first} ${user.name.last}`}
      </TextSmallStrong>
      <TextSmall size={15}>
        +91 336 5811
      </TextSmall>
      <TextSecondry color={mode && '#98A5B8'} size={15} >
        {user.job}
      </TextSecondry>
    </ProfileItems >

    <ProfileItems row lightMode={mode}>
      <AddIcCallOutlinedIcon/>
      <VideocamOutlinedIcon/>
      <SearchIcon/>
    </ProfileItems>

    <ProfileItems lightMode={mode}>
   
    <FormControlLabel required control={<Switch />} label={ <TextSecondry color={mode && '#98A5B8'} size={17}>
        Custom NOtifications
      </TextSecondry>}  labelPlacement="start"/>


    </ProfileItems>

    <ProfileItems lightMode={mode}>
    <ProfileBtn>
        <ChatRoundedIcon />
        <TextSecondry size={12} color={'#29A666'}>
          {` Text ${user.name.first}`}
        </TextSecondry >
     </ProfileBtn>
      
    <ProfileBtn >
        <BlockIcon  color={'#EA5455'}/>
        <TextSecondry size={12} color={'#EA5455'}>
        {` Block ${user.name.first}`}
        </TextSecondry>
    </ProfileBtn>

     <ProfileBtn>
        <FlagIcon />
        <TextSecondry size={12} color={'#EA5455'}>
          {` Report ${user.name.first}`}
        </TextSecondry >
     </ProfileBtn>
    </ProfileItems>

    </ProfileContainer>
    </>

  )
}
