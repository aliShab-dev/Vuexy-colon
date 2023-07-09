import React from 'react'
import { Avatar, Checkbox } from "@mui/material"
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { StyledBox } from "../../../../styles/email/grid/grid";
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import { OpenEmailModal } from "@/component/eMail/index/EmailModalSlicer";
import { useDispatch, useSelector } from "react-redux";
import { OpenSentModal } from '@/component/eMail/sent/EmailSentModal';


export const EmailSent = () => {
  const dispatch = useDispatch()
  const emails = useSelector((state) => (state.EmailData.emails.results))
  return (
    emails.map(email => (

      <StyledBox key={email.cell} 
      readed={email.dob.age}>
        <div className="email" >
            <Checkbox sx={{color:'#C6CAE3'}}/>
          <div className="detail"  onClick={() => dispatch(OpenSentModal(email))}>
            {email.gender === "female" ?<StarOutlinedIcon sx={{color: '#EC9442'}} /> :<StarOutlineOutlinedIcon sx={{color:'#7A809F'}}/>}
            <Avatar sx={{width:'20px', height: '20px'}} alt={email.name.last} src={email.picture.thumbnail} />
            <p>{email.name.first}  {email.name.last}</p>
            <p className="text">Hi it's {email.name.first},Lorem dolor sit.</p>
          </div>
          <div className="data"  onClick={() => dispatch(OpenSentModal(email))} >
            <FiberManualRecordIcon className="dot" />
            <span className="time">10:12 AM</span>
            <div className="hide" >
              <DeleteTwoToneIcon/>
              <ErrorTwoToneIcon />
              <MailTwoToneIcon />
            </div>
          </div>
        </div>
      </StyledBox>
        ))
  )
}
