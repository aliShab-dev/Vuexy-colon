import styled from '@emotion/styled'
import { Badge } from '@mui/material'

export const StyledBadge = styled(Badge)( props=> ({
  '& .MuiBadge-badge': {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: props.bgColor || '#44b700',
    color: props.bgColor || '#44b700',
    boxShadow: `0 0 0 2px #2F3349`,
    '&::after': {
      display: props.active,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
export const StyledSearchBar = styled.div( props => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  width: '100%',
  padding: '8px 15px',
  borderBottom: '1px solid #434968',
  position:'sticky',
  backgroundColor: '#2F3349',
  top:'0',
  zIndex: 9
}))
export const InputBox = styled.div( props => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',

  '& .MuiSvgIcon-root': {
    position: 'absolute',
    left: '5px',
    color: '#ACB4D7',
    fontSize: '18px',
    cursor: 'pointer'
  },
  
  "& input":{
    backgroundColor: 'transparent',
    border: '1px solid #434968',
    borderRadius: '15px',
    outline: 'none',
    width: '100%',
    padding: ' 6px 8px 6px 25px',
    color: '#ACB4D7',
    fontSize: '11px',

    '&:focus':{
      border: '1px solid #7367F0',
    }
  }
}))
