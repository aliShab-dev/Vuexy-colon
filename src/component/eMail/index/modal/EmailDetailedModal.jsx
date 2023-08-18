import styled from '@emotion/styled'
import React from 'react'
import { useSelector } from 'react-redux'
import { EmailModalHeader } from '../../../header/EmailModalHeader'
import FormatBoldTwoToneIcon from '@mui/icons-material/FormatBoldTwoTone';
import FormatItalicTwoToneIcon from '@mui/icons-material/FormatItalicTwoTone';
import FormatUnderlinedTwoToneIcon from '@mui/icons-material/FormatUnderlinedTwoTone';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import PlaylistAddTwoToneIcon from '@mui/icons-material/PlaylistAddTwoTone';
import PanoramaTwoToneIcon from '@mui/icons-material/PanoramaTwoTone';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';
import FlagIcon from '@mui/icons-material/Flag';
import { Button } from '@mui/material'
import { EmailBottonBOx, EmailBox, EmailIconBox, EmailInput, ModalBox, Overlay, TextSecondry, TextSmall, TextSmallStrong } from './style';



export const EmailDetailedModal = () => {
  const detail = useSelector(state => (state.EmailModal.data))
  const mode = useSelector(state => (state.LightModeHandler.lightMode))


  return (
    <Overlay lightMode={mode}>
      
      <ModalBox lightMode={mode}>
        
        <EmailModalHeader 
         pic={detail.picture.thumbnail}
         detail={detail.name}/>

        <EmailBox >
          <TextSmallStrong color={'#7A809F'}>
            Greetings!
          </TextSmallStrong>

          <TextSmall color={mode && '#98A5B8'} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex rerum consequuntur optio quos ullam, similique provident quod autem sint iusto magni error assumenda hic sit nobis amet necessitatibus adipisci?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est rem odit porro!<br/>
          <br/>
          similique provident quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ipsa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos suscipit nam voluptatem?<br/>
          <br/>
          similique provident quod autem sint iusto magni error assumenda hic sit nobis amet necessitatibus.
          </TextSmall>
   
          <TextSmall color={mode && '#98A5B8'} >
            Sincerely yours,
            {`${detail.name.first} ${detail.name.last}`}
          </TextSmall>
          
          <TextSecondry
           color={mode && '#98A5B8'} 
           style={{display:"flex",alignItems:'center'}}>

            <AttachmentRoundedIcon
             sx={{marginRight: '5px',fontSize: 10}}/>

            Attachments

          </TextSecondry>

          <TextSecondry
           color={mode && '#98A5B8'} 
           style={{display:"flex",alignItems:'center'}}>
            <FlagIcon
             sx={{marginRight: '5px',fontSize: 10}}/>
             report
          </TextSecondry>

        </EmailBox>

       </ModalBox>

      <ModalBox lightMode={mode}>
        
        <EmailModalHeader
         pic={detail.picture.thumbnail}
         detail={detail.name}/>


        <EmailBox>

          <TextSmallStrong color={'#7A809F'}>
            Greetings!
          </TextSmallStrong>

          <TextSmall color={mode && '#98A5B8'} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex rerum consequuntur optioci?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est rem odit porro!<br/>
          <br/>
      
          similique provident quod autem sint iusto magni error assumenda hic sit nobis amet necessitatibus.
          </TextSmall>
   
          <TextSmall color={mode && '#98A5B8'} >
            Sincerely yours,
            {`${detail.name.first} ${detail.name.last}`}
          </TextSmall>
          
          <TextSecondry color={mode && '#98A5B8'}  style={{display:"flex",alignItems:'center'}}>
            <AttachmentRoundedIcon sx={{marginRight: '5px',fontSize:'15px'}}/>
            Attachments
          </TextSecondry>
          <TextSecondry color={mode && '#98A5B8'}  style={{display:"flex",alignItems:'center'}}>
            <FlagIcon sx={{marginRight: '5px',fontSize:'15px'}}/>
            report
          </TextSecondry>
        </EmailBox>
       </ModalBox>

       
       
        <ModalBox lightMode={mode}>
          <EmailBox>
          <TextSecondry color={mode && '#98A5B8'}>
            Reply to{` ${detail.name.first} ${detail.name.last}`}
          </TextSecondry>

          <EmailIconBox>
            <FormatBoldTwoToneIcon/>
            <FormatItalicTwoToneIcon/>
            <FormatUnderlinedTwoToneIcon/>
            <ListTwoToneIcon/>
            <PlaylistAddTwoToneIcon/>
            <PanoramaTwoToneIcon/>
          </EmailIconBox>

          <EmailInput type="text"  placeholder='write your massage'/>

          <EmailBottonBOx>
            <Button variant="text">
              <AttachmentRoundedIcon sx={{marginRight: '5px',fontSize:'15px'}}/>
                Text
            </Button>

            <Button variant="contained">
              <SendRoundedIcon sx={{marginRight: '5px',fontSize:'15px'}}/> 
              Contained
            </Button>
          </EmailBottonBOx>
          </EmailBox> 
        </ModalBox>
      </Overlay>
    )
}
