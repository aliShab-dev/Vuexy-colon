import store from "@/Redux/store"
import styled from "@emotion/styled"
import { Provider } from "react-redux"
import Footer from "./Footer"
import { Leftbar } from "./LeftBar"
import { Navbar } from "./Navbar/Navbar"



const MainContainer = styled.div(props=>({
  width: '100%',
  display: 'flex',
  gap: '10px',
  padding: '0',
  margin: '0',
  backgroundColor: '#25293C',
}))

const Column = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '68vw',
  backgroundColor: 'inherit',
  gap: '23px',
  height: '100%',
  margin: '15px auto',
  marginTop: '65px',
  marginLeft: '300px' ////// need to chnage by leftbar Action //////
})


export const Layout = ({children}) => {

return(
    <MainContainer>
    <Leftbar/>
    
    <Column>
      <Navbar/>
      {children}
      <Footer/>
    </Column>
    
    </MainContainer>
)
}
