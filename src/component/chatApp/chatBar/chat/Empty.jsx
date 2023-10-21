import { Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { MassageContainer } from '../style/massage'

export const Empty = () => {
  const chat = useSelector(state => (state.SetInput.newMassage))
  console.log(chat)
  return (
    <> 
    {
      chat &&
      <Stack
      margin={'auto'}>
        <Image
         priority
         alt='send massage' src='/send-massage.png' width={120} height={120}/>
      </Stack>
      // :
      // null
      // chat.map(
      //   massage => (
      //   <MassageContainer
      //     flexDirection={massage.isSeen ? 'row-reverse' : 'row'}
      //     alignItems='start'
      //     width={'100%'}
      //     elevation={0}
      //     key={massage.id}
      //     >
      //     <Image 
      //       src={ massage.isSeen ? "/chat.png" : user.picture.thumbnail}
      //       alt={user.name.last}
      //       width={30}
      //       height={30}
      //       style={{
      //         borderRadius: '50%',
      //         marginTop: 3
      //       }}
      //       />
    
      //     <ItemContainer>
      //         {
      //           massage.text.map( text => (
      //             <Stack
      //               alignItems={'start'}
      //               bgcolor={massage.isSeen ? '#7367F0' : 'background.paper'}
      //               key={`${massage.id} ${text}`}
      //               sx={{
      //                 borderRadius: '6px',
      //                 padding: '10px',
      //                 marginBottom: '5px',
      //               }}>
      //               <Typography
      //                 fontWeight={700}
      //                 fontSize={11}
      //                 variant='body1'
      //                 component={'p'}
      //                 color={massage.isSeen? 'white' : 'text.icon'}
      //                 >
      //                 {text}
      //               </Typography>
    
      //           </Stack>
      //           ))
      //         }
      //         <TextIcon isUser={massage.isSeen}>
      //             <Typography
      //               fontWeight={700}
      //               fontSize={9}
      //               variant='body1'
      //               component={'span'}
      //               color='text.secondary'
      //               >
      //                 {massage.time} 
      //             </Typography>
      //             {
      //               massage.isSeen && <DoneAllRoundedIcon />
      //             }   
      //         </TextIcon>     
    
      //     </ItemContainer>
          
      //   </MassageContainer>
      //   ))
    }
    </>
  )
}
