import styled from '@emotion/styled'
import { Stack } from '@mui/system'

export const StyledContact = styled(Stack)( props => ({
  padding: '8px',
  position: 'relative',
  background: props.selected ? 'linear-gradient(to right, #7166EB, #5F58BF)' : 'transparent' ,
  borderRadius: '5px',
  
  '& .date':{
    position: 'absolute',
    right: 5,
    top: '2px'
  },
  '& p,span': {
    color: props.selected && '#fff'
  }
}))

export const ContactInfo = styled.div( props => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: 2,
  marginLeft: '7px'
}))
