import styled from '@emotion/styled'

export const StyledContact = styled.div( props => ({
  display: 'flex',
  margin: '0',
  padding: '8px',
  width: '100%',
  justifyContent: 'start',
  alignContent: 'center',
  position: 'relative',
  background: props.selected ? 'linear-gradient(to right, #7166EB, #5F58BF)' : 'transparent' ,
  borderRadius: '5px',
  

  '& .date':{
    position: 'absolute',
    right: 5,
    top: '2px'
  },
  '& p,span': {
    color: props.selected && 'white'
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
