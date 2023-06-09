import { Avatar, Checkbox } from "@mui/material"
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { StyledBox } from "../../../styles/email/grid/grid";
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import { OpenEmailModal } from "@/Redux/EmailModalSlicer";
import { useDispatch, useSelector } from "react-redux";


export const Grid = () => {

  const dispatch = useDispatch()
  const emailDetail = useSelector((state)=> (state.EmailData.emails.results))

  return(
    emailDetail.map(email => (

  <StyledBox key={email.cell} 
  readed={email.dob.age}>
    <div className="email" >
        <Checkbox sx={{color:'#C6CAE3'}}/>
      <div className="detail"  onClick={() => dispatch(OpenEmailModal(email))}>
        {email.gender === "female" ?<StarOutlinedIcon sx={{color: '#EC9442'}} /> :<StarOutlineOutlinedIcon sx={{color:'#7A809F'}}/>}
        <Avatar sx={{width:'20px', height: '20px'}} alt={email.name.last} src={email.picture.thumbnail} />
        <p>{email.name.first}  {email.name.last}</p>
        <p className="text">Hi it's {email.name.first},Lorem dolor sit.</p>
      </div>
      <div className="data"  onClick={() => dispatch(OpenEmailModal(email))}>
        <FiberManualRecordIcon className="dot" />
        <span className="time">10:12 AM</span>
        <div className="hide" >
          <DeleteTwoToneIcon />
          <ErrorTwoToneIcon />
          <MailTwoToneIcon />
        </div>
      </div>
    </div>
  </StyledBox>
    ))

    
)
}