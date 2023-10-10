import styled from "@emotion/styled"
import { Paper } from "@mui/material"
import { MainBar } from "./mainBar/MainBar"
import { SideBar } from "./sideBar/sideBar"

 const EmailContainer = styled(Paper)(props => ({
  display :'flex',
  width: '100%',
  minWidth: 500,
  height: '84.7vh',
  position: 'relative',
  overflow: 'hidden',
  
  '::-webkit-scrollbar':{
    width:'0'
  },
  '@media(max-width:1200px)': {
     height: '86vh',
    },
}))

export const Email = () => {

  return(
    <EmailContainer
      sx={{boxShadow: 5}}
      >
      <SideBar />

      <MainBar />
    </EmailContainer>
  )
}