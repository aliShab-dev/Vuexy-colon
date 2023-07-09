import { Grid } from "../index/Grid";
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MarkEmailReadTwoToneIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone';
import NavigateNextTwoToneIcon from '@mui/icons-material/NavigateNextTwoTone';
import NavigateBeforeTwoToneIcon from '@mui/icons-material/NavigateBeforeTwoTone';
import Link from "next/link";
import { MainBarContainer } from "../../../../styles/email/mainEmail/mailnEmail";
import { EmailDetailedModal } from "../index/EmailDetailedModal";
import { useDispatch, useSelector } from "react-redux";
import { EmailReload } from "../reload/EmailReload";
import { fetchEmail } from "@/component/eMail/mainBar/EmailData";
import { useEffect } from "react";
import { CloseEmailModal } from "@/component/eMail/index/EmailModalSlicer";
import { EmailError } from "../error/EmailError";
import { EmailSendModal } from "../sent/EmailSendModal";
import { EmailSent } from "../sent/EmailSent";
import { StyledBox } from "@/component/chatApp/chatBar/Header";


export const MainBar = () => {
  const dispatch = useDispatch() 
  const EmailModal = useSelector((state) => (state.EmailModal.isOpen))
  const sentModal = useSelector((state) => (state.SentModal.isOpen))
  const sideBar = useSelector((state) => (state.SideBar.name))
  const sent = useSelector((state) => (state.SentModal.data))
  const emailData = useSelector((state) => (state.EmailData))


  console.log(sent)

  useEffect(() =>{
    dispatch(fetchEmail(sideBar === 'inbox' ? 12 : 2))
  },[sideBar])

  return(

  <MainBarContainer>
    <div className="header">
      <div className="input">
        <SearchRoundedIcon/>
        <input type="text" placeholder="Search Mail" />
      </div>

      <div className="options">
        <Link href={'/app/email'} onClick={() => {
           dispatch(fetchEmail(sideBar === 'inbox' ? 12 : 2))
          dispatch(CloseEmailModal())}} >
          <RefreshRoundedIcon  />  
        </Link>
        <MoreVertRoundedIcon/>
      </div>
    </div>
    <div className="menu">
      <div className="left">
      <DeleteTwoToneIcon/>
      <MarkEmailReadTwoToneIcon/>
      <FolderOpenTwoToneIcon/>
      <BookmarkTwoToneIcon/>
      </div>
      <div className="right">
        <p>1-10 OF 130</p>
        <NavigateBeforeTwoToneIcon/>
        <NavigateNextTwoToneIcon/>  
      </div>
    </div>


{
  sideBar !== 'inbox' ? (<StyledBox>
            {emailData.isLoading && <EmailReload/> }
            {emailData.isLoading || emailData.isError && (<EmailError />)}
            {!emailData.isLoading && emailData.emails.results && !sentModal && !emailData.error && (<EmailSent /> ) }
            {sentModal && <EmailSendModal />}
        </StyledBox>) 
        :
        (<StyledBox>
          {emailData.isLoading && <EmailReload/> }
          {emailData.isLoading || emailData.isError && (<EmailError />)}
          {!emailData.isLoading && emailData.emails.results && !EmailModal && !emailData.error && (<Grid /> ) }
          {EmailModal && <EmailDetailedModal />}
        </StyledBox>)
}


  </MainBarContainer>
)
}

