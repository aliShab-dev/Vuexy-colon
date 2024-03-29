import React from 'react'
import { Avatar, Checkbox, Stack, Typography } from "@mui/material"
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import { OpenEmailModal } from "@/component/eMail/index/EmailModalSlicer";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmail } from "../mainBar/EmailData";
import { OpenSentModal } from "../index/modal/sentModal/EmailSentModal";

export const EmailsItem = () => {
  const dispatch = useDispatch()
  const emails = useSelector((state) => (state.EmailData.emails.results))
  const showSidebarModal = useSelector(state => (state.SideModal.isOpen))
  const sentModal = useSelector((state) => (state.SentModal.isOpen))

  return(
  <>
  {
    emails.map(email => (
        <Stack
          key={email.cell} 
          width='100%'
          padding={1}
          bgcolor={ email.dob.age > 40 ? 'background.paper' : 'background.default'}
          sx={{
            borderBottom: '1px solid',
            borderColor: 'divider',
            '&:hover':{
              transition: 'opacity .3s ease',  
              borderColor: 'primary.main',
              opacity: '.9',
              '& .hide':{
                display: 'flex', 
              },
              '& .dot': {
                display: 'none',
                transition:'all .3s ease',
              },
              '& .span': {
                display: 'none',
                transition:'all .3s ease',
              },
            }
          }}
          >
            <Stack
              component={'div'}
              direction={'row'}
              justifyContent='space-between'
              alignItems='center'
              className="email" 
              >

              <Stack
                component={'div'}
                direction='row'
                justifyContent='start'
                alignItems='center'
                spacing={1}
                onClick={() =>{
                  sentModal ? 
                  showSidebarModal || dispatch(OpenEmailModal(email))
                  :
                  showSidebarModal || dispatch(OpenSentModal(email))
                }}
              >

                <Checkbox
                  color="primary"
                  sx={{fontSize: '10px' }}
                  />

                {
                  email.gender === "female" ?
                  (
                  <StarOutlinedIcon sx={{color: '#EC9442'}} />
                  ) : (
                  <StarOutlineOutlinedIcon sx={{color:'#7A809F'}}/>
                  )
                }

                <Avatar
                  sx={{width:'20px', height: '20px'}}
                  alt={email.name.last}
                  src={email.picture.thumbnail}
                  />

                <Typography
                  variant="body1"
                  component={'p'}
                  color='text.icon'
                  fontSize={12}
                  fontWeight={700}
                >
                  {email.name.first.toString()}  {email.name.last.toString()}
                </Typography>

                <Typography
                  variant="body1"
                  color='text.primary'
                  component={'p'}
                  fontSize={11}
                  fontWeight={800}
                  className="text"
                  >
                 {`   Hi it's ${email.name.first.toString()}, Lorem ipsum dolor sit elit.`}
                </Typography>

              </Stack >
              <Stack
                component={'div'}
                direction={'row'}
                className="data"
                >
                
                <FiberManualRecordIcon
                  className="dot" 
                  sx={{
                    color: email.dob.age > 55 ? '#28C76F' : '#EA5455',
                    marginRight: 1,
                    fontSize: 10
                  }}
                  />

                <Typography
                  variant="body2"
                  component={'span'}
                  color='text.primary'
                  className="span"
                  fontSize={11}
                  >
                    10:12 AM
                </Typography>

                <Stack
                  component={'div'}
                  direction='row'
                  spacing={1}
                  display='none'
                  className="hide"
                  >
                    <DeleteTwoToneIcon
                      color='icon'
                      onClick={() => dispatch(deleteEmail(email.cell))}
                      sx={{fontSize: 15}}
                      />

                    <ErrorTwoToneIcon
                     onClick={() => {
                      sentModal ? 
                        showSidebarModal || dispatch(OpenEmailModal(email))
                        :
                        showSidebarModal || dispatch(OpenSentModal(email))
                      }}
                      color='icon'
                      sx={{fontSize: 15}}
                      />

                    <MailTwoToneIcon
                      onClick={() => {
                        sentModal ? 
                          showSidebarModal || dispatch(OpenEmailModal(email))
                          :
                          showSidebarModal || dispatch(OpenSentModal(email))
                      }}
                      color='icon'
                      sx={{fontSize: 15}}
                      />
                </Stack>

              </Stack>
            </Stack>
        </Stack>
    ))
  }

    </>  
    
)
}