import styled from '@emotion/styled'
import { Button, Paper, Stack } from '@mui/material'


export const InputLayout = styled(Paper)( props => ({
  position: 'sticky',
  background: 'transparent',
  bottom: '0',
  display: 'flex',
  width: '100%',
  padding: '7px 14px',
  paddingTop: '0'
}))

export const StyledInput = styled(Stack)( props => ({
  padding: '6px',
  width: '100%',
  borderRadius: '6px',
}))

export const StyledBottun = styled(Button)( props => ({
  width: 10, 
  height: '26px', 
}))