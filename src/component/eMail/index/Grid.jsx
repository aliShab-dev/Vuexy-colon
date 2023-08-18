import { Avatar, Checkbox, Divider, Stack, Typography } from "@mui/material"
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { StyledBox } from "../../../../styles/email/grid/grid";
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import { OpenEmailModal } from "@/component/eMail/index/EmailModalSlicer";
import { useDispatch, useSelector } from "react-redux";


export const Grid = () => {
  const dispatch = useDispatch()
  const emails = useSelector((state) => (state.EmailData.emails.results))
  const showSidebarModal = useSelector(state => (state.SideModal.isOpen))

  return(
    emails.map(email => (

  <StyledBox
   key={email.cell} 
   sx={{
    backgroundColor: email.dob.age > 40 ? (theme=> theme.palette.mode === 'light' ? '#E0E2FF' : '#343952'): 'inherit',
   }}
   >
    <Stack
      direction={'row'}
      justifyContent='space-between'
      alignItems='center'
      className="email" >

      <Stack
        direction='row'
        justifyContent='start'
        alignItems='center'
        spacing={1}
        onClick={() =>{
          showSidebarModal || dispatch(OpenEmailModal(email))
        }}
       >

     <Checkbox color="primary" sx={{fontSize: '10px' }}/>

     {email.gender === "female" ?<StarOutlinedIcon sx={{color: '#EC9442'}} /> :<StarOutlineOutlinedIcon sx={{color:'#7A809F'}}/>}

     <Avatar
      sx={{width:'20px', height: '20px'}}
      alt={email.name.last}
      src={email.picture.thumbnail}/>


     <Typography
       variant="body1"
       component={'p'}
       color='text.icon'
       fontSize={12}
       fontWeight={700}
     >
       {email.name.first}  {email.name.last}
     </Typography>

     <Typography
       variant="body1"
       color='text.primary'
       component={'p'}
       fontSize={10}
       className="text"
      
      >Hi it's {email.name.first}, Lorem ipsum dolor sit elit.</Typography>

   </Stack>

      <div
       className="data"
       onClick={() => {
        showSidebarModal || dispatch(OpenEmailModal(email))
        }}>
        
        <FiberManualRecordIcon
          className="dot" 
          sx={{
            color: email.dob.age > 55 ? '#28C76F' : '#EA5455' 
          }}
          />

        <Typography
          variant="body2"
          component={'span'}
          color='text.primary'
          fontSize={11}
         className="time">10:12 AM</Typography>

        <div className="hide" >

          <DeleteTwoToneIcon color='icon' sx={{fontSize: 15}}/>

          <ErrorTwoToneIcon color='icon' sx={{fontSize: 15}}/>

          <MailTwoToneIcon color='icon' sx={{fontSize: 15}}/>

        </div>

      </div>
      
    </Stack>
  </StyledBox>

))

    
)
}