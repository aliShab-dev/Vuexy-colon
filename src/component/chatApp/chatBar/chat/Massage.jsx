import Image from 'next/image';
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import { useEffect } from 'react';
import { ItemContainer, MassageContainer, TextIcon } from '../style/massage';
import { Stack, Typography } from '@mui/material';
import { InputBar } from '../inputField/InputBar';


const Massage = () => {
  const user = useSelector( state => state.ConteactSelector.user)
  const chat = useSelector(state => (state.SetInput.massage))
  const bottomEl = useRef(null);

  useEffect(
    () => {
      bottomEl?.current?.scrollIntoView({ behavior: 'smooth' });
    },[chat])

  return (
<>
{
  chat.map(
    massage => (
    <MassageContainer
      flexDirection={massage.isSeen ? 'row-reverse' : 'row'}
      alignItems='start'
      width={'100%'}
      elevation={0}
      key={massage.id}
      >
      <Image 
        src={ massage.isSeen ? "/chat.png" : user.picture.thumbnail}
        alt={user.name.last}
        width={30}
        height={30}
        style={{
          borderRadius: '50%',
          marginTop: 3
        }}
        />

      <ItemContainer>
          {
            massage.text.map( text => (
              <Stack
                alignItems={'start'}
                bgcolor={massage.isSeen ? '#7367F0' : 'background.paper'}
                key={`${massage.id} ${text}`}
                sx={{
                  borderRadius: '6px',
                  padding: '10px',
                  marginBottom: '5px',
                }}>
                <Typography
                  fontWeight={700}
                  fontSize={11}
                  variant='body1'
                  component={'p'}
                  color={massage.isSeen? 'white' : 'text.icon'}
                  >
                  {text}
                </Typography>

            </Stack>
            ))
          }
          <TextIcon isUser={massage.isSeen}>
              <Typography
                fontWeight={700}
                fontSize={9}
                variant='body1'
                component={'span'}
                color='text.secondary'
                >
                  {massage.time} 
              </Typography>
              {
                massage.isSeen && <DoneAllRoundedIcon />
              }   
          </TextIcon>     

      </ItemContainer>
      
    </MassageContainer>
    ))
}

  <InputBar /> 

  <div ref={bottomEl}></div>
</>

  )
}

export default Massage
