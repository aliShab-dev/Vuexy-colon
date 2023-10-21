import { IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import { sendInput, setNewMassage } from '@/component/chatApp/chatBar/slicer/SetInput';
import { InputLayout, StyledBottun, StyledInput } from '../style/input';


export const InputBar = ({ newUser }) => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const handleSub= (e) => {
    e.preventDefault();
  }

  const onTextChange =(e) =>setText(e.target.value)
  
  const handleSubmit = (newUser) =>{
    if(text){
      newUser? 
    dispatch(sendInput({id:11, time:'11:03 A.M', text:[text], isSeen: true}))
    :
    dispatch(setNewMassage({id:11, time:'11:03 A.M', text:[text], isSeen: true}))
    
    setText("")
    }
  }

  return (
    <InputLayout>
    
      <StyledInput
        justifyContent='space-between'
        alignItems='center'
        bgcolor='background.paper'
        direction='row'
        onSubmit={handleSub}
        boxShadow={1}
        >
        
       <TextField
          id="outlined-basic"
          variant="outlined"
          type="text" 
          placeholder='type your massage here'
          value={text}
          onChange={onTextChange}
          sx={{
            width: '100%',
              "& .MuiOutlinedInput-input":{
                fontSize: 15,
                padding: 0
              },
              "& fieldset": {
                border: 'none'
              },
          }}
          />

          <IconButton
           aria-label="mic"
           sx={{width: '25px', height: '25px'}}
           >
            <KeyboardVoiceIcon
              color='icon'
              sx={{fontSize: 15}}
              />
          </IconButton>

          <IconButton
           aria-label="mic"
           sx={{width: '25px', height: '25px'}}
           >
            <input type="file"  className="file"/>  
            <AttachFileIcon
              color='icon'
              sx={{fontSize: 15}}
              />
          </IconButton>

          <StyledBottun
            type='submit'
            variant="contained"
            onClick={()=>handleSubmit(newUser)}
            >
            <Typography
              fontWeight={500}
              fontSize={10}
              variant='body1'
              component={'p'}
              color='white'
              >
                Send
             </Typography>
             <SendIcon 
              color='white'
              sx={{fontSize: 15, marginLeft: 1}}
             />
          
          </StyledBottun>

        </StyledInput>
    </InputLayout>
  )
}
