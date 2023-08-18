import styled from "@emotion/styled"
import { ListItemButton, ListSubheader, Paper } from "@mui/material"

export const StyledListItemButton = styled(ListItemButton)(props => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginLeft: '7px',
  borderRadius: '6px',
  height: '28px',
  padding: '12px 5px 12px 13px',
  width: props.setclose === 'close'? '3rem' : '93%',
  transition: 'width .3s ease',
  marginBottom: 4,

  '& > p ':{
    opacity: props.setclose==='close'? '0' : '1',
  },

  '&.Mui-selected':{
   background: 'linear-gradient(to right, #7367F0, #5F58BF)',

    '& > p ':{
    color: '#fff'
   },

   '& .MuiSvgIcon-root': {
    color: '#fff'
  },
  },
 }
))

export const StyledAccordian = styled(StyledListItemButton)(props => ({
  display: 'flex',
  backgroundColor: 'inherit',
  justifyContent: 'space-between',
  width: props.setclose === 'close' ? 50 : '93%',
  transition: 'width .3s ease',

    '& p':{
       display: props.setclose === 'close' ? 'none' : 'flex',
     },

    '& .MuiSvgIcon-root': {
      display: props.setclose === 'close' ? 'inline-block' : 'flex',
    },

    '& .icon': {
      display: props.setclose === 'close' ? 'none' : 'flex',
    },
}))

export const StyledHeader = styled(ListSubheader)(props=> ({  
  height: '48px',
  paddingLeft: 8,
  top: 0,
  zIndex: 99,

  '& a':{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 25,
    cursor: 'pointer',
    transition: '.3s ease-out' ,

    '& h3': {
      opacity: props.setclose ==='close'? '0' : '1', 
      transition: 'opacity .5s ease-out',
      margin: 'auto',
      height: '100%',
    },
  },
    '& .MuiSvgIcon-root': {
        opacity: props.setclose ==='close'? '0' : '1', 
      transition: 'opacity .5s ease-out',
      borderRadius: '50%', 
      border: '1px solid',
      fontSize: 18,
      cursor: 'pointer'
    }
}))
 
export const Container = styled(Paper)(props=>({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: props.display === 'close'? '4rem' : 220,
  overflowY: 'scroll',
  overflowX: 'hidden',
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
    left: props.show == 'open' ? 0 : -230,
    position: 'fixed',
  }
}))
