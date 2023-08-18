import styled from "@emotion/styled";
import { Paper } from "@mui/material";


export const MainBarContainer = styled(Paper)(props => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: 500,
  height: '100%',
  position: 'relative',
  width: '100%',
  opacity: 1,

  '@media(max-width:940px)': {
    opacity: props.show === 'show' ? .4 : 1,
  },
  
  '& .header': {
    width: '100%',
    borderBottom: '1px solid #434968',

    '@media(max-width:940px)': {
      '& .input':{
        marginLeft: 45
      }
    },

    '& .leftBar-collapsed':{
     display: 'none',

    '@media(max-width:940px)': {
      display: 'flex',
      position: 'absolute',
      left: 13,
    },
  },
  },
}))

export const EmailContainer = styled.div(props => ({
  display :'flex',
  width: '100%',
  minWidth: 500,
  height: '84.7vh',
  boxShadow: '-2px 2px 4px -2px #25293E',
  position: 'relative',

  '::-webkit-scrollbar':{
    width:'0'
  },
    '@media(max-width:1200px)': {
     height: '86vh',
     marginTop: 50,
},
}))




