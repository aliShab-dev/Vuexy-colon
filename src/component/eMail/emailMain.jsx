import { useSelector } from "react-redux"
import { EmailContainer } from "../../../styles/email/mainEmail/mailnEmail"
import { MainBar } from "./mainBar/MainBar"
import { SideBar } from "./sideBar/sideBar"


export const Email = () => {
  const showSidebarModal = useSelector(state => (state.SideModal.isOpen))
 
  return(
<EmailContainer>
    <SideBar show={showSidebarModal}/>

    <MainBar show={showSidebarModal}/>
</EmailContainer>
  )
}