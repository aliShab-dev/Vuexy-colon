import { TextSecondry, TextSmall } from '@/component/eMail/index/modal/EmailDetailedModal';
import Image from 'next/image';
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import { useEffect } from 'react';
import { InputBar } from './InputBar';
import { ItemContainer, MassageContainer, MassageItem, TextIcon } from '../style/massage';


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
      width={22}
      height={22}
      style={{borderRadius: '50%'}}/>

    <ItemContainer>
        {
          massage.text.map( text => (
            <MassageItem
             lightMode={mode}
             key={`${massage.id} ${text}`}
             isUser= {massage.isSeen}>

               <TextSecondry size={11} color={mode && 'white'}>
                {text}
               </TextSecondry>

           </MassageItem>
          ))
        }
       <TextIcon isUser={massage.isSeen}>
          <TextSmall>
            {massage.time} 
          </TextSmall>
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
