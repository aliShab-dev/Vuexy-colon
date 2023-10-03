import Image from 'next/image';
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import { useEffect } from 'react';
import { InputBar } from './InputBar';
import { ItemContainer, MassageContainer, MassageItem, TextIcon } from '../style/massage';
import { Typography } from '@mui/material';


const Massage = () => {
  const user = useSelector( state => state.ConteactSelector.user)
  const chat = useSelector(state => (state.SetInput.massage))
  const bottomEl = useRef(null);
  const mode = useSelector(state => (state.LightModeHandler.lightMode))

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
      key={massage.id}
      isUser= {massage.isSeen}
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
              <MassageItem
                lightMode={mode}
                key={`${massage.id} ${text}`}
                isUser= {massage.isSeen}
                >
                <Typography
                  fontWeight={700}
                  fontSize={11}
                  variant='body1'
                  component={'p'}
                  color={massage.isSeen? 'white' : 'text.icon'}
                  >
                  {text}
                </Typography>

            </MassageItem>
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
