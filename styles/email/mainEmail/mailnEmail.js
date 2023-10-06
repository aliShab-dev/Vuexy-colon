import styled from "@emotion/styled";

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




