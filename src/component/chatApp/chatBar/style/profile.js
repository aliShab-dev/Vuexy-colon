import styled from '@emotion/styled';
import { Button, Stack } from '@mui/material';

export const ProfileContainer = styled.div( props=> ({
  margin:'0 auto',
  marginTop: '170px',
  backgroundColor: 'transparent',
  position: 'relative',
  width: '70%',
}))

export const Layout = styled.div( props => ({
  position: 'absolute',
  width: '100%',
  top: '-100px'
}))

export const StyledImage = styled.div( props => ({
  margin: 'auto',
  width: '150px'
}))

export const ProfileItems = styled(Stack)( props=> ({
  padding: props.first ? '55px 10px 10px 10px' : '10px',
  gap: props.row ? '40px' : '10px',
  borderRadius: props.first === 'first' && '10px 10px 0 0',
  marginBottom: '12px',
}))

export const ProfileBtn = styled(Button)( props=> ({
  width: '100%',
  padding: '5px 0px',
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  gap: '20px',
  '&:hover':{
    opacity: .9
  },
}))