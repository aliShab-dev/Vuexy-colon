import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { TextSecondry } from '@/component/eMail/index/EmailDetailedModal';
import { useDispatch, useSelector } from 'react-redux';
import { sendInput } from '@/component/chatApp/chatBar/slicer/SetInput';
import { InputLayout, StyledBottun, StyledInput } from '../style/input';




export const InputBar = () => {
  const chat = useSelector(state => (state.SetInput.massage))
  const dispatch = useDispatch()
  const [text, setText] = useState('')


  const handleSub= (e) => {
    e.preventDefault();
  }

  const onTextChange =(e) =>setText(e.target.value)
  
  const handleSubmit =() =>{
    if(text){
    dispatch(sendInput({id:11, time:'11:03 A.M', text:[text], isSeen: true}))
    setText("")
  }
  }

  return (
    <InputLayout>
    
      <StyledInput
      onSubmit={handleSub}
      >
        
          <input 
          type="text" 
          className='text' 
          placeholder='type your massage here'
          value={text}
          onChange={onTextChange}
          />

          <IconButton aria-label="mic" sx={{width: '25px', height: '25px'}}>
                <KeyboardVoiceIcon />
          </IconButton>

          <IconButton aria-label="mic" sx={{width: '25px', height: '25px'}}>
            <input type="file"  className="file"/>  
            <AttachFileIcon/>
          </IconButton>


          <StyledBottun
            type='submit'
            variant="contained"
            endIcon={<SendIcon />}
            onClick={(event)=>handleSubmit(event.target)}
            >
            <TextSecondry>
                Send
            </TextSecondry>
          </StyledBottun>

        </StyledInput>
    </InputLayout>
  )
}
