import styled from "@emotion/styled";

export const WraperLinearChart = styled.div(props=>({
  backgroundColor:'#2F3349',
  borderRadius:'6px',
  flex:1,
  minWidth :'400px',
  
  '& .badge':{
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'start',
    paddingTop: '20px',
    paddingLeft:'20px',
    alignItems:'start',

    '& strong':{
      fontSize:'14px',
      color:'#CBCFE9'
    },
    '& small':{
      fontSize:'10px',
      color:'#A5ACCF'
    },
  }

}))
