import { Stack } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux'
import { EmailError } from '../../error/EmailError'
import { EmailsItem } from '../../grid/EmailsItem'
import { EmailDetailedModal } from '../../index/modal/inboxModal/EmailDetailedModal'
import { EmailSendModal } from '../../index/modal/sentModal/EmailSendModal'
import { EmailReload } from '../../reload/EmailReload'
import { modalHandler } from '../../sideBar/SideBarModal'


export const Condition = () => {
  const dispatch = useDispatch()
  const EmailModal = useSelector((state) => (state.EmailModal.isOpen))
  const sentModal = useSelector((state) => (state.SentModal.isOpen))
  const emailData = useSelector((state) => (state.EmailData))

  return (
   <>
     {
        sideBar !== 'inbox' ? 
            (
              <Stack
                onClick={() => dispatch(modalHandler(false))}
                sx={{
                  width: '100%',
                  height: '100%',
                  overflowY: 'scroll',
                  '::-webkit-scrollbar':{
                    display: 'none'
                  },
                }}
                >
                  {
                  emailData.isLoading && <EmailReload/>
                  }
                  
                  {
                  !emailData.isLoading && emailData.isError && (<EmailError />)
                  }

                  {
                  !emailData.isLoading && emailData.emails.results && !sentModal && !emailData.error && (<EmailsItem /> )
                  }

                  {
                  sentModal && <EmailSendModal />
                  }

              </Stack>
            ) 
              :
            (
              <Stack
                onClick={() => dispatch(modalHandler(false))}
                sx={{
                  width: '100%',
                  height: '100%',
                  overflowY: 'scroll',
                  '::-webkit-scrollbar':{
                    display: 'none'
                  },
                }}
                >
                  {
                  emailData.isLoading && <EmailReload/>
                  }

                  {
                  !emailData.isLoading && emailData.isError && <EmailError />
                  }

                  {
                  !emailData.isLoading && emailData.emails.results && !EmailModal && !emailData.error && <EmailsItem /> 
                  }

                  {
                  EmailModal && <EmailDetailedModal />
                  }

              </Stack>
            )
      }
   </>
  )
}

