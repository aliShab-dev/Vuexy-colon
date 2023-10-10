import { EmailDetailedModal } from "../index/modal/EmailDetailedModal";
import { useDispatch, useSelector } from "react-redux";
import { EmailReload } from "../reload/EmailReload";
import { fetchEmail } from "@/component/eMail/mainBar/EmailData";
import { useEffect } from "react";
import { EmailError } from "../error/EmailError";
import { EmailSendModal } from "../sent/EmailSendModal";
import { EmailSent } from "../sent/EmailSent";
import { modalHandler } from '../sideBar/SideBarModal';
import { Stack } from "@mui/material";
import EmailAppHeader from '@/component/header/emailHeaders/emailAppHeader.jsx/EmailAppHeader';
import { MainbarHeader } from '@/component/header/mainBarHeader/MainbarHeader';
import { EmailSubHeader } from "@/component/header/emailHeaders/emailSubHeader/EmailSubHeader";
import { Grid } from "../index/Grid";


export const MainBar = () => {
  const dispatch = useDispatch() 
  const EmailModal = useSelector((state) => (state.EmailModal.isOpen))
  const sentModal = useSelector((state) => (state.SentModal.isOpen))
  const sideBar = useSelector((state) => (state.SideBar.name))
  const emailData = useSelector((state) => (state.EmailData))
  const showSidebarModal = useSelector(state => (state.SideModal.isOpen))
 
  useEffect(() =>{
    dispatch(fetchEmail(sideBar === 'inbox' ? 12 : 4))
  },[sideBar])

  useEffect(() =>{
    dispatch(modalHandler(false))
  },[])

  return(

  <Stack
    alignItems='center'
    width={"100%"}
    height={"100%"}
    minWidth={500}
    elevation={0}
    bgcolor="background.paper"
    sx={{
      position: 'relative',
      opacity: 1,
      transition: '.2s ease' ,
      '@media(max-width:940px)': {
        opacity: showSidebarModal ? .4 : 1,
      },
    }}
    >

      <MainbarHeader
        component={EmailAppHeader}
        data={sideBar}
        />

      <EmailSubHeader data={sideBar}/>
        
      {
      sideBar !== 'inbox' ? (
            <Stack
              sx={{
                width: '100%',
                height: '100%',
                overflowY: 'scroll',
                '::-webkit-scrollbar':{
                  display: 'none'
                },
              }}
              onClick={() => dispatch(modalHandler(false))}
              >

              {
              emailData.isLoading && <EmailReload/>
              }
              
              {
              emailData.isLoading || emailData.isError && (<EmailError />)
              }

              {
              !emailData.isLoading && emailData.emails.results && !sentModal && !emailData.error && (<EmailSent /> )
              }

              {
              sentModal && <EmailSendModal />
              }

            </Stack>) 
            :
            (<Stack
              sx={{
                width: '100%',
                height: '100%',
                overflowY: 'scroll',
                '::-webkit-scrollbar':{
                  width:'0'
                },
              }}
              onClick={() => dispatch(modalHandler(false))}
              >

              {
              emailData.isLoading && <EmailReload/>
              }

              {
              emailData.isLoading || emailData.isError && (<EmailError />)
              }

              {
              !emailData.isLoading && emailData.emails.results && !EmailModal && !emailData.error && <Grid /> 
              }

              {
              EmailModal && <EmailDetailedModal />
              }

            </Stack>)
      }
  </Stack>
)
}

