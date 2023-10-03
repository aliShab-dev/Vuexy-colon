import styled from '@emotion/styled'
import { Box, Button, Paper } from '@mui/material'




export const InputLayout = styled(Box)( props => ({
  position: 'sticky',
  bottom: '0',
  display: 'flex',
  width: '100%',
  padding: '7px 14px',
  paddingTop: '0'
}))

export const StyledInput = styled(Paper)( props => ({
  display: 'flex',
  // backgroundColor: props.lightMode? '#C6C4CB' : '#2F3349',
  padding: '6px',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '6px',

  '& .text': {
    width: '80%',
    backgroundColor: props.lightMode? '#C6C4CB' : '#2F3349',
    border: 'none',
    outline: 'none',
    paddingLeft: '5px',
    color: props.lightMode? 'white' : '#2F3349',
    fontWeight: '500'
  },
  '& .file': {
    width:'18px',
    position: 'absolute',
    opacity: 0
  },
}))

export const StyledBottun = styled(Button)( props => ({
  width: 10, 
  height: '26px', 
  backgroundColor: '#7367F0',

  '&:hover': {
    backgroundColor: '#685DD8'
  }
}))