import styled from "@emotion/styled";

export const MainContainer = styled.div(props => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
  gap: '15px',
  borderRadius: '8px',
  marginBottom: '5px',
  backgroundColor: 'transparent',
}))
