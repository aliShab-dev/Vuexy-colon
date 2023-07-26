import styled from "@emotion/styled"
import { useSelector } from "react-redux"
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

const Column = styled.div(props =>({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '75vw',
  backgroundColor: 'inherit',
  gap: '23px',
  height: '100%',
  margin: '15px auto',
  marginTop: '65px',
  opacity : 1,
  
  '@media(max-width:1200px)': {
    width: '85vw',
    margin: '15px auto',
    opacity : props.ShowMinModal ? .3 : 1,
},

}))

const DummyLeft = styled.div(props=> ({
  width: props.ShowModal ? 170 : 30,
  height: '100%',
  '@media(max-width:1200px)': {
    width: 0
},
}))


export const Layout = ({ children }) => {
  const ShowModal = useSelector(state => (state.LeftBarCollapse.ShowModal))
  const ShowMinModal = useSelector(state => (state.LeftBarCollapse.ShowMinModal))

return(
    <MainContainer>
      
      <Leftbar/>
      
      <DummyLeft ShowModal={ShowModal}>
      </DummyLeft>

      <Column ShowMinModal={ShowMinModal}>
        <Navbar/>
        {children}
        <Footer/>
      </Column>
      
    </MainContainer>
)
}

