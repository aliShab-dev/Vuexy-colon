import styled from '@emotion/styled';



export const StyledBox = styled.div( props => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  overflow: 'scroll',
  position: 'relative',
  backgroundColor: props.backColor || 'transparent',

  '::-webkit-scrollbar':{
    display: 'none'
},
}))