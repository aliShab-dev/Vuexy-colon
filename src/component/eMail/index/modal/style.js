import styled from "@emotion/styled"


export const Overlay = styled.div(props => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  width: '100%',
  height: '100%',
  padding: '15px',
  background: props.lightMode? '#C6C4CB' : '#25293C',
  overflowY: 'scroll',
  gap: '15px',
  
  '::-webkit-scrollbar':{
    display: 'none'
  },
}))
export const ModalBox = styled.div(props => ({
  width: '100%',
  backgroundColor: props.lightMode? 'white' : '#2F3349',
  borderRadius: '6px'
}))
export const EmailBox = styled.div(props=> ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'start',
  gap: '15px',
  padding: '5px 15px',
  width: '100%'
}))
export const TextSmall = styled.span(props => ({
  color: props.color? props.color : '#7A809F',
  fontSize: props.size || 10,
  padding:0,
  fontWeight: '400',
  fontFamily: 'sans-serif',
  cursor: 'default',
}))
export const TextSmallStrong = styled.span(props => ({
  color: props.color,
  fontSize: props.size ? props.size : 10,
  padding:0,
  fontWeight: '600',
  fontFamily: 'sans-serif',
  cursor: 'default',
}))
export const TextSecondry = styled.span(props => ({
  color: props.color? props.color :'#C6CAE3',
  fontSize: props.size || 11,
  fontFamily: 'sans-serif'
}))
export const EmailIconBox = styled.div(props=>({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '5px',

  '& .MuiSvgIcon-root': {
    color:'#C6CAE3',
    fontSize: '18px',
    cursor: 'pointer',
  },
}))
export const EmailBottonBOx = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  alignSelf: 'end',
  "& .MuiButtonBase-root": {
    width: '100px',
    fontSize: '10px'
  }
})
export const EmailInput = styled.input({
  backgroundColor: 'transparent',
  width: '100%',
  height: '40px',
  border: 'none',
  outline: 'none',
  color: '#C6CAE3',
  fontSize: '11px',
  
  '&::placeholder':{
    color: '#7A809F',
    fontSize: '12px'
  }
})
