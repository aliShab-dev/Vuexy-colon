import styled from "@emotion/styled"
import { Button, Chip } from "@mui/material"
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FiberManualRecordTwoToneIcon from '@mui/icons-material/FiberManualRecordTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import StarRateTwoToneIcon from '@mui/icons-material/StarRateTwoTone';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import { useDispatch, useSelector } from "react-redux";
import { selectItem } from "@/Redux/EmailsidBarHandler";


export const SideBarContainer = styled.div(props=>({
  backgroundColor: '#2F3349', 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '200px',
  height: '100%',
  borderRight: '1px solid #434968',
  padding: '0',
  overflow: 'hidden',
 
  '& .compose':{
    padding: '12px 15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    '& .MuiButton-root':{
      backgroundColor: '#685DD8',
      fontSize: '8px',
      width: '100%',
    },

  },
  '& .items':{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },

  '& .labels':{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    gap: '15px',
    padding: '0 15px',
    marginTop: '15px',

    '& span': {
      color:'#7A809F',
      alignSelf: 'start',
      fontSize: '10px'
    },

    '& .label':{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      cursor: 'default',

      '& .left':{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: '#C6CAE3',
        fontSize: '10px',
        fontFamily: 'sans-serif',

        '& .MuiSvgIcon-root': {
          marginRight: '7px',
          fontSize: '9px'
        },
      },
    },
  },


}))

const Item = styled.div(props => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderLeft: props.selected && '1px solid #685DD8',
    padding: '5px 15px',

    '& .MuiChip-root':{
      fontSize: '8px'
  },
      
    '& .left':{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',

      '& p':{
        color: props.selected ? '#685DD8':'#C6CAE3',
        fontSize: '10px',
        fontFamily: 'sans-serif',
      },

      '& .MuiSvgIcon-root': {
        color: props.selected ? '#685DD8':'#C6CAE3',
        marginRight: '7px',
        fontSize: '14px',
      },
  },
}))

const Chips = styled.div(props => ({
  color: props.color,
  width: '14px',
  height: '14px',
  fontSize: '9px',
  backgroundColor: '#2B2F43',
  alignItems: 'center',
  borderRadius: '50%',
  padding: '3px'

}))


export const SideBar = () => {
  const sideBar = useSelector((state) => (state.SideBar.name))
  const dispatch = useDispatch()

  return(
<SideBarContainer >
    <div className="compose" >
       <Button variant="contained">Contained</Button>
    </div>

    <div className="items">

      <Item selected={sideBar === 'inbox'} onClick={() => {dispatch(selectItem('inbox'))}}>
        <div className="left">
          <MailTwoToneIcon />
          <p>Inbox</p>
        </div>

          <Chips color={'#685DD8'} >12</Chips>
      </Item>

      <Item selected={sideBar !== 'inbox'} onClick={() => {dispatch(selectItem('sent'))}}>
        <div className="left">
          <SendTwoToneIcon />
          <p>Sent</p>
        </div>
        <Chips color={'#61DAFB'} >2</Chips>
      </Item>

      <Item>
        <div className="left">
        <DriveFileRenameOutlineIcon/>
          <p>Draft</p>
        </div>
      </Item>

      <Item>
        <div className="left">
        <StarRateTwoToneIcon />
        <p>Starred</p>
        </div>

        <Chips color={'#E69143'}>4</Chips>

      </Item>

      <Item>
        <div className="left">
        <ErrorTwoToneIcon />
          <p>Spam</p>
        </div>
        
      </Item>

      <Item>
        <div className="left">
          <DeleteTwoToneIcon />
          <p>Trash</p>
        </div>
      </Item>
    </div>

    <div className="labels">
      <span>Labels</span>
      <div className="label">
      <div className="left">
          <FiberManualRecordTwoToneIcon sx={{color:'#28C76F'}}/>
          <p>Company</p>
        </div>
      </div>

      <div className="label">
      <div className="left">
          <FiberManualRecordTwoToneIcon sx={{color:'#7367F0'}}/>
          <p>Work</p>
        </div>
      </div>

      <div className="label">
      <div className="left">
          <FiberManualRecordTwoToneIcon sx={{color:'#00CFE8'}}/>
          <p>Important</p>
        </div>
      </div>

      <div className="label"> 
      <div className="left">
          <FiberManualRecordTwoToneIcon sx={{color:'#EA5455'}}/>
          <p>Private</p>
        </div>
      </div>
    </div>
    

</SideBarContainer>
  )
}