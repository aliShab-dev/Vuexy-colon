import styled from "@emotion/styled";
import { Stack } from "@mui/system";

export const StyledBox = styled(Stack)(props => ({
  width: '100%',
  padding: '10px',
  borderBottom: '1px solid #434968',

  '&:hover':{
    opacity: '.75',
    transition: 'opacity .3s ease',   
    '& .email':{
    '& .data' :{
    
      '& .hide':{
        display: 'flex', 
        gap: 8
      },

      '& .dot': {
        display: 'none',
        transition:'all .3s ease',
      },
      '& span': {
        display: 'none',
        transition:'all .3s ease',
      },
    },
   },
  },
  
  '& .email':{

    '& .data' :{   

      '& .hide':{
        top: '20px',
        display: 'none',
      },
      
      '& .dot': {
        marginRight: '7px',
        fontSize: '10px',
      },
      '& .MuiAvatar-root': {
        width: '20px',
        height: '20px',
        cursor: 'pointer',
      },
    }
  }
  }))
  
  