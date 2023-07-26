import styled from "@emotion/styled";

export const MainContainer = styled.div(props => ({
  width: '100%',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
  gap: '15px',
  borderRadius: '8px',
  marginBottom: '5px',
  backgroundColor: 'transparent',

  '@media(max-width:1200px)': {
    marginTop: '50px',
},

  
}))
