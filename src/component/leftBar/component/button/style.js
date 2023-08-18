import styled from "@emotion/styled"
import { ListItemButton } from "@mui/material"


export const StyledListItemButton = styled(ListItemButton)(props => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginLeft: 7,
  marginBottom: 3,
  borderRadius: '6px',
  height: '28px',
  padding: '12px 5px 12px 13px',
  width: props.setclose === 'close' ? '3rem' : '93%',
  transition: 'width .3s ease',

  '& > p ':{
    opacity: props.setclose==='close'?'0' : '1',
  },

  '& .MuiSvgIcon-root': {
    marginRight: '7px'
  },
 
  '&.Mui-selected':{
   background: 'linear-gradient(to right, #7367F0, #5F58BF)',

   '& > p ':{
    color:'#F2F0FD'
  },
  
  '& .MuiSvgIcon-root': {
    color: '#F2F0FD',
  }
 },
}))
