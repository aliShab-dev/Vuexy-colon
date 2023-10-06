import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MarkEmailReadTwoToneIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone';
import NavigateNextTwoToneIcon from '@mui/icons-material/NavigateNextTwoTone';
import NavigateBeforeTwoToneIcon from '@mui/icons-material/NavigateBeforeTwoTone';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Link from "next/link";
import { MainBarContainer } from "../../../../styles/email/mainEmail/mailnEmail";
import { EmailDetailedModal } from "../index/modal/EmailDetailedModal";
import { useDispatch, useSelector } from "react-redux";
import { EmailReload } from "../reload/EmailReload";
import { fetchEmail } from "@/component/eMail/mainBar/EmailData";
import { useEffect } from "react";
import { CloseEmailModal } from "@/component/eMail/index/EmailModalSlicer";
import { EmailError } from "../error/EmailError";
import { EmailSendModal } from "../sent/EmailSendModal";
import { EmailSent } from "../sent/EmailSent";
import { Grid } from '../index/Grid';
import styled from '@emotion/styled';
import { modalHandler } from '../sideBar/SideBarModal';
import { Button, Stack, Typography } from "@mui/material";

const EmailBox = styled.div(props => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  overflowY: 'scroll',

  '::-webkit-scrollbar':{
    width:'0'
  },

}))


export const MainBar = () => {
  const dispatch = useDispatch() 
  const EmailModal = useSelector((state) => (state.EmailModal.isOpen))
  const sentModal = useSelector((state) => (state.SentModal.isOpen))
  const sideBar = useSelector((state) => (state.SideBar.name))
  const emailData = useSelector((state) => (state.EmailData))
  const showSidebarModal = useSelector(state => (state.SideModal.isOpen))
 
  useEffect(() =>{
    dispatch(fetchEmail(sideBar === 'inbox' ? 12 : 2))
  },[sideBar])

  useEffect(() =>{
    dispatch(modalHandler(false))
  },[])
  const showContactModal = useSelector(state => (state.ConatactModal.isOpen))
  console.log(showContactModal)
  return(

  <MainBarContainer
   show={showSidebarModal ? 'show' : null}
   width={'100%'}
   elevation={0}
   bgcolor='background.paper'
   >

    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className="header"
      >

      <Button
        color="icon"
        variant="outlined"
        className="leftBar-collapsed"
        onClick={() => dispatch((modalHandler(true)))}
        sx={{
          minWidth: 0,
          width: '10px',
        }}
        >

        <DensityMediumIcon
           color="icon"
           sx={{
             fontSize: 13
           }}
          />

      </Button>

      <Stack
        direction='row'
        alignItems='center'
        className='input'
        sx={{
          width: '100%',
          padding: 1,
          '& input':{
            flex: 1,
            backgroundColor: 'inherit',
            border: 'none',
            outline: 'none',
            fontSize: 13,
            color: 'text.primary',
          }
        }}
       >

        <SearchRoundedIcon
           color="icon"
           sx={{
             marginRight: 1,
             fontSize: 18
           }}/>

        <input type="text" placeholder="Search Mail" />
        
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        >
        <Link
         href={'/app/email'}
         onClick={() => {
           dispatch(fetchEmail(sideBar === 'inbox' ? 12 : 3))
          dispatch(CloseEmailModal())
          }}>

          <RefreshRoundedIcon
            color='icon'
            sx={{
              marginRight: 1,
              fontSize: 20,
              cursor: 'pointer'
            }}
           />  

        </Link>
        
        <MoreVertRoundedIcon
         color='icon'
         sx={{
           marginRight: 1,
           fontSize: 20,
           cursor: 'pointer'
         }}
         />

      </Stack>

    </Stack>
    
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        padding: 2,
        borderBottom: (theme) =>
        theme.palette.mode === 'dark' ? '1px solid #434978' : '1px solid #dbdade',
        width: '100%'
      }}
      >

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          >
          <DeleteTwoToneIcon 
            color="icon"
            sx={{
              fontSize: 15,
              cursor: 'pointer'  
            }}
          />

          <MarkEmailReadTwoToneIcon
            color="icon"
            sx={{
              fontSize: 15,
              cursor: 'pointer'  
            }}
            />

          <FolderOpenTwoToneIcon
            color="icon"
            sx={{
              fontSize: 15,
              cursor: 'pointer'  
            }}/>

          <BookmarkTwoToneIcon
            color="icon"
            sx={{
              fontSize: 15,
              cursor: 'pointer'  
            }}
            />

        </Stack>

        <Stack 
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 15,
              color: 'icon',
              cursor: 'pointer'
            },
          }}
          >
      
            {
               sideBar !== 'inbox' ? (
                <Typography
                variant='body1'
                component='p'
                color='text.primary'
                fontSize={10}
                sx={{
                  cursor: 'default'
                }}
               >
                 1-2 OF 22
                </Typography>
                ) : (
                  <Typography
                  variant='body1'
                  component='p'
                  color='text.primary'
                  fontSize={10}
                  sx={{
                    cursor: 'default'
                  }}
                 >
                  1-13 OF 130
                </Typography>
                )
            }
           
          <NavigateBeforeTwoToneIcon
           color='secondary'
           sx={{
            fontSize: 15,
           }}
          />

          <NavigateNextTwoToneIcon
           color='icon'
          />  

        </Stack>

    </Stack>


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
        (<EmailBox
          sx={{
            width: '100%',
            height: '100%',
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
          !emailData.isLoading && emailData.emails.results && !EmailModal && !emailData.error && (<Grid /> )
          }

          {
          EmailModal && <EmailDetailedModal />
          }

        </EmailBox>)
}
  </MainBarContainer>
)
}

