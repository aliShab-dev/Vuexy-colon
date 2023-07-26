import styled from "@emotion/styled"
import { ListItemButton } from "@mui/material"

export const StyledListItemButton = styled(ListItemButton)(props => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#2F3349', 
  marginLeft: '7px',
  borderRadius: '6px',
  height: '28px',
  padding: '12px 5px 12px 13px',
  width: props.setclose==='close'?'3rem' : '160px',
  transition: 'width .3s ease',

  '& > p ':{
    opacity: props.setclose==='close'?'0' : '1',
    color:'#ACB3D8',
    fontSize:'11px',
    fontFamily:'sans-serif',
    fontWeight: 'lighter',
  },

  '& .MuiSvgIcon-root': {
    color: '#ACB3D8',
    marginRight: '7px'
  },

 
  '&:hover':{
    backgroundColor: '#343952',

    '& > p ':{
      color:'#C6CAE3',
      fontSize:'11px',
      fontFamily:'sans-serif',
      fontWeight: 'lighter'
    },
  
    '& .MuiSvgIcon-root': {
      color: '#C6CAE3',
      marginRight: '7px'
    },
  
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

export const StyledAccordian = styled(StyledListItemButton)(props => ({

  '&:hover':{
    backgroundColor: '#343952',

    '& > p ':{
      color:'#C6CAE3',
      fontSize:'11px',
      fontFamily:'sans-serif',
      fontWeight: 'lighter'
    },
  },

    '&.Mui-selected':{
      background: '#343952',
   
      '& > p ':{
       color:'#C6CAE3'
     },
     
     '& .MuiSvgIcon-root': {
       color: '#C6CAE3',
     }

  }
}))

export const StyledHeader = styled.div(props=> ({  
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '43px',
  paddingLeft: '20px',
  
  
  '& a':{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',

    '& p': {
      opacity: props.setclose ==='close'? '0' : '1', 
      fontWeight:'700',
      fontSize: '14px',
      color:'#CFD3EC',
      alignSelf: 'self-start',
      fontFamily: 'sans-serif',
      transition: 'opacity .5s ease-out',
      margin: 'auto',
      height: '100%',
    },

    '& .MuiSvgIcon-root': {
      color: '#CFD3EC',
      fontSize: "10px"
    }
  }

}))
 
export const Container = styled.div(props=>({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: props.display === 'close'? '4rem' : '11rem',
  overflowY: 'scroll',
  overflowX: 'hidden',
  backgroundColor:'#2F3349',
  transition: '.3s ease-out' ,
  paddingRight:'0',
  zIndex: 100,
  position: 'fixed',
  

  /// scroll setting ///
  '::-webkit-scrollbar':{
    width:'0'
  },

  /// Media Query ///
  '@media(max-width:1200px)': {
    position: 'absolute',
    left: props.ShowMinModal ? 0 : -190,
    position: 'fixed',
  }
  
}))
