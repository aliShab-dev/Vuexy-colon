import styled from '@emotion/styled';
import { Stack } from '@mui/system';



export const StyledBox = styled(Stack)( props => ({
  overflow: 'scroll',
  position: 'relative',

  '::-webkit-scrollbar':{
    display: 'none'
  },
}))