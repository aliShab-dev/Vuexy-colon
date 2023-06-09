import { Grid } from "./Grid";
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
import { MainBarContainer } from "../../../styles/email/mainEmail/mailnEmail";
import { EmailDetailedModal } from "../modals/EmailDetailedModal";
import { useDispatch, useSelector } from "react-redux";
import { EmailReload } from "../reload/EmailReload";
import { refreshed, refreshing } from "@/Redux/EmailData";
import { useEffect } from "react";


export const MainBar = () => {
  const dispatch = useDispatch() 
  const ModalDetail = useSelector((state) => (state.EmailModal.isOpen))
  const isReloading = useSelector((state) => (state.EmailData.isFetching))

useEffect(() => {
  setTimeout(function() {
    dispatch(refreshed())
  }
  , 1500)
}, [isReloading === true])

return(

  <MainBarContainer>
    <div className="header">
      <div className="input">
        <SearchRoundedIcon/>
        <input type="text" placeholder="Search Mail" />
      </div>

      <div className="options">
        <Link href={'/app/email'} onClick={() => dispatch(refreshing())} >
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
    <div className="emails">
      {isReloading ? <EmailReload/> : ModalDetail ? <EmailDetailedModal/> : <Grid /> }
    </div>

  </MainBarContainer>
)
}