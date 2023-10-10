import styled from "@emotion/styled"

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
