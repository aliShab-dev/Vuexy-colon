import React from 'react'
import FormatItalicTwoToneIcon from '@mui/icons-material/FormatItalicTwoTone';
import FormatUnderlinedTwoToneIcon from '@mui/icons-material/FormatUnderlinedTwoTone';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import PlaylistAddTwoToneIcon from '@mui/icons-material/PlaylistAddTwoTone';
import PanoramaTwoToneIcon from '@mui/icons-material/PanoramaTwoTone';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';
import FormatBoldTwoToneIcon from '@mui/icons-material/FormatBoldTwoTone';
import FlagIcon from '@mui/icons-material/Flag';
import { Button } from '@mui/material'
import { EmailModalHeader } from '../../header/EmailModalHeader';
import { useSelector } from 'react-redux';
import { EmailBottonBOx, EmailBox, EmailIconBox, EmailInput, ModalBox, Overlay, TextSecondry, TextSmall, TextSmallStrong } from '../index/modal/style';




export const EmailSendModal = () => {
  const detail = useSelector(state => (state.SentModal.data))
  const mode = useSelector(state => (state.LightModeHandler.lightMode))

  return (
    <Overlay lightMode={mode}>

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
            <SendRoundedIcon
              sx={{marginRight: '5px',fontSize:'15px'}}/>
              Contained
          </Button>

        </EmailBottonBOx>

        </EmailBox> 
        
      </ModalBox>
    </Overlay>
  )
}
