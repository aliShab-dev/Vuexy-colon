import React from 'react'
import { useSelector } from 'react-redux'
import { EmailError } from '../../error/EmailError'
import { EmailsItem } from '../../grid/EmailsItem'
import { EmailDetailedModal } from '../../index/modal/inboxModal/EmailDetailedModal'
import { EmailSendModal } from '../../index/modal/sentModal/EmailSendModal'
import { EmailReload } from '../../reload/EmailReload'


export const Condition = () => {
  const EmailModal = useSelector((state) => (state.EmailModal.isOpen))
  const sentModal = useSelector((state) => (state.SentModal.isOpen))
  const emailData = useSelector((state) => (state.EmailData))
  const sideBar = useSelector((state) => (state.SideBar.name))

  return (
   <>
     {
        sideBar !== 'inbox' ? 
            (
             <>
                  {
                  emailData.isLoading && <EmailReload num={4}/>
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

              </>
            ) 
              :
            (
              <>
                  {
                  emailData.isLoading && <EmailReload num={13}/>
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

              </>
            )
      }
   </>
  )
}

