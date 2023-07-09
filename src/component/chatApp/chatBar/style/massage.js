import styled from '@emotion/styled';


export const ItemContainer = styled.div( props => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '85%'
}))

export const MassageItem = styled.div( props => ({
  display: 'inline',
  alignItems: 'start',
  backgroundColor: props.isUser ? '#7367F0' : '#2F3349',
  borderRadius: '6px',
  padding: '10px',
  marginBottom: '5px',
}))

export const MassageContainer = styled.div( props => ({
  display: 'flex',
  flexDirection: props.isUser ? 'row-reverse' : 'row',
  alignItems: 'start',
  width: '100%',
  padding: '15px',
  gap: '10px',
}))

export const TextIcon = styled.div( props => ({
display: 'flex',
alignItems: 'center',
alignSelf: !props.isUser ? 'start' : 'end',
justifyItems: 'center',
gap: '5px',

'& .MuiSvgIcon-root': {
  marginRight: '7px',
  fontSize: '11px',
  color:'#26895B',
},
}))
