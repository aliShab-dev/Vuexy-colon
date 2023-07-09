import { TextSecondry, TextSmall, TextSmallStrong } from '@/component/eMail/index/EmailDetailedModal'
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
  return (
    <>
    <ProfileContainer>

      <Layout>
        <StyledImage>
            <Image alt={`${user.name.first} ${user.name.last}`} src={user.picture.large}  width={150} height={150} blurDataURL loading="lazy" style={{borderRadius: '50%',}} />
        </StyledImage>
      </Layout>

    <ProfileItems first>
      <TextSmallStrong size={20}>
        {`${user.name.first} ${user.name.last}`}
      </TextSmallStrong>
      <TextSmall size={15}>
        +91 336 5811
      </TextSmall>
      <TextSecondry size={15} >
        {user.job}
      </TextSecondry>
    </ProfileItems>

    <ProfileItems row>
      <AddIcCallOutlinedIcon/>
      <VideocamOutlinedIcon/>
      <SearchIcon/>
    </ProfileItems>

    <ProfileItems>
   
    <FormControlLabel required control={<Switch />} label={ <TextSecondry size={17}>
        Custom NOtifications
      </TextSecondry>}  labelPlacement="start"/>


    </ProfileItems>

    <ProfileItems>
    <ProfileBtn>
        <ChatRoundedIcon />
        <TextSecondry color={'#29A666'}>
          {` Text ${user.name.first}`}
        </TextSecondry >
     </ProfileBtn>
      
    <ProfileBtn >
        <BlockIcon color={'#EA5455'}/>
        <TextSecondry color={'#EA5455'}>
        {` Block ${user.name.first}`}
        </TextSecondry>
    </ProfileBtn>

     <ProfileBtn>
        <FlagIcon />
        <TextSecondry color={'#EA5455'}>
          {` Report ${user.name.first}`}
        </TextSecondry >
     </ProfileBtn>
    </ProfileItems>

    </ProfileContainer>
    </>

  )
}
