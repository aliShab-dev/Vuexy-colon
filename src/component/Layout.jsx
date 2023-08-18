import styled from "@emotion/styled"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from "react-redux"
import Footer from "./Footer"
import { LeftBarLayout } from "./leftBar/LeftBarLayout";
import { Navbar } from "./Navbar/Navbar"


const MainContainer = styled.div(props=>({
  width: '100%',
  display: 'flex',
  gap: '10px',
  padding: '0',
  margin: '0',
  backgroundColor: props.lightMode ? '#C6C4CB' :'#25293C',
  minHeight: '100vh'
}))

const Column = styled.div(props =>({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '70vw',
  backgroundColor: 'inherit',
  gap: '23px',
  height: '100%',
  margin: '0 auto',
  marginTop: '65px',
  opacity : 1,
  
  '@media(max-width:1200px)': {
    width: '80vw',
    margin: '15px auto',
    opacity : props.ShowMinModal ? .3 : 1,
},
}))

const DummyLeft = styled.div(props=> ({
  width: props.ShowModal ? 210 : 30,
  height: '100%',
  '@media(max-width:1200px)': {
    width: 0
},
}))

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // light mode
          primary: {main:'#7367f0'},
          secondary: {main:'#dbdade'},
          icon:{main: '#6f6b7d'},
          divider: '#dbdade',
          background: {
            default: '#c6c4cb',
            paper: '#fff',
          },
          text: {
            primary: '#5d596c',
            secondary: '#9390e',
            icon: '#6f6b7d',
            light: '#a5a3ae',
          },
        }
      : {
          // dark mode
          primary: {main:'#7367f0'},
          secondary: {main:'#434968'},
          icon: {main: '#cfd3ec'},
          divider: '#434978',
          background: {
            default: '#25293c',
            paper: '#2f3349',
          },
          text: {
            primary: '#b6bee3',
            secondary: '#949bbd',
            icon: '#cfd3ec',
            light: '#7983bb',
          },
        }),
    },
});





export const Layout = ({ children }) => {
  const ShowModal = useSelector(state => (state.LeftBarCollapse.ShowModal))
  const ShowMinModal = useSelector(state => (state.LeftBarCollapse.ShowMinModal))
  const mode = useSelector(state => (state.LightModeHandler.lightMode))
  const darkModeTheme = createTheme(getDesignTokens( mode? 'light' : 'dark'));


return( 
  <ThemeProvider theme={darkModeTheme}>
    
    <MainContainer lightMode={mode}>
      
      <LeftBarLayout />
      
      <DummyLeft ShowModal={ShowModal}>
      </DummyLeft>

      <Column ShowMinModal={ShowMinModal}>
        <Navbar/>
        {children}
        <Footer/>
      </Column>
      
    </MainContainer>

  </ThemeProvider>
    


)
}



