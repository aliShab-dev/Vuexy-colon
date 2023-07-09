import React from 'react'
import styled from "@emotion/styled"
import { TextSecondry, TextSmall, TextSmallStrong } from '../index/EmailDetailedModal'
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

const Overlay = styled.div(props => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  width: '100%',
  height: '100%',
  padding: '15px',
  background: '#25293C',
  position: 'absolute',
  overflow: 'scroll',
  gap: '15px',
  
  '::-webkit-scrollbar':{
    display: 'none'
  },
}))
const ModalBox = styled.div(props => ({
  width: '100%',
  backgroundColor: '#2F3349',
  borderRadius: '6px'
}))
const EmailBox = styled.div(props=> ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'start',
  gap: '15px',
  padding: '5px 15px',
  width: '100%'
}))
const EmailInput = styled.input({
  backgroundColor: 'transparent',
  width: '100%',
  height: '40px',
  border: 'none',
  outline: 'none',
  color: '#C6CAE3',
  fontSize: '11px',
  
  '&::placeholder':{
    color: '#7A809F',
    fontSize: '12px'
  }
})
const EmailBottonBOx = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  alignSelf: 'end',
  "& .MuiButtonBase-root": {
    width: '100px',
    fontSize: '10px'
  }
})
const EmailIconBox = styled.div(props=>({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '5px',

  '& .MuiSvgIcon-root': {
    color:'#C6CAE3',
    fontSize: '18px',
    cursor: 'pointer',
  },
}))


export const EmailSendModal = () => {
  const detail = useSelector(state => (state.SentModal.data))
  return (
    <Overlay>
    <ModalBox>
      <EmailModalHeader pic={detail.picture.thumbnail} detail={detail.name}/>

      <EmailBox>
        <TextSmallStrong>Greetings!</TextSmallStrong>

        <TextSmall>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex rerum consequuntur optioci?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est rem odit porro!<br/>
        <br/>
    
        similique provident quod autem sint iusto magni error assumenda hic sit nobis amet necessitatibus.
        </TextSmall>
 
        <TextSmall>Sincerely yours,
          {`${detail.name.first} ${detail.name.last}`}
        </TextSmall>
        
        <TextSecondry style={{display:"flex",alignItems:'center'}}><AttachmentRoundedIcon sx={{marginRight: '5px',fontSize:'15px'}}/>Attachments
        </TextSecondry>
        <TextSecondry style={{display:"flex",alignItems:'center'}}><FlagIcon sx={{marginRight: '5px',fontSize:'15px'}}/>report</TextSecondry>
      </EmailBox>
     </ModalBox>

     
     
      <ModalBox>
        <EmailBox>
        <TextSecondry>Reply to{` ${detail.name.first} ${detail.name.last}`} </TextSecondry>

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
          <Button variant="contained"><SendRoundedIcon  sx={{marginRight: '5px',fontSize:'15px'}}/> 
          Contained</Button>
        </EmailBottonBOx>
        </EmailBox> 
      </ModalBox>
    </Overlay>
  )
}
