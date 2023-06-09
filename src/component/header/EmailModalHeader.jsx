import styled from '@emotion/styled'
import { Avatar, Icon } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch } from 'react-redux';
import { CloseEmailModal } from '@/Redux/EmailModalSlicer';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import CloseIcon from '@mui/icons-material/Close';
const EmailModalHeaderStyled = styled.div(props => ({

    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    padding: '5px 15px',
    
    "& .user-info": {
      display:'flex',
      flexDirection: 'row',

    '& .right':{
      marginLeft: '8px',
      display:'flex',
      flexDirection: 'column',
      justifyContent:'center',
      color: '#717AB0',
      
      '& p':{
        fontSize: '12px',
        fontWeight: '600',
        color:'#BDC0DA',
        fontFamily: 'sans-serif'
      },
      '& small':{
        fontSize: '10px',
        fontFamily: 'sans-serif'
      }    
    },
  },
    
    '& .left':{
      color:'#717AB0',
      position: 'relative',
      cursor: 'pointer',
      
      '& .hidden':{
        position: 'absolute',
        right: '5px',
        bottom: '-45px',
        display:'none',
        flexDirection: 'column',
        backgroundColor:'#2F3349',
        boxShadow: '2px 2px 6px -2px #2F3349'
      }
  }
}))
  

export const EmailModalHeader = ({detail, pic}) => {
  const dispatch = useDispatch()
  
  return (
      <EmailModalHeaderStyled>
        <div className='user-info'>
          <Avatar sx={{width:'40px', height: '40px'}}  alt='user picture' src={pic} />
          <div className="right"> 
            <p>{`${detail.first} ${detail.last}`}</p>
            <small>Recruter at Amazon</small>
          </div>
        </div>

      <div className="left">
        <DoNotDisturbIcon fontSize='10'/>
        <MoreVertIcon fontSize='10'/>
        <CloseIcon fontSize='10'  onClick={() => dispatch(CloseEmailModal())}/>
        <div style={{display:'none'}} className='hidden'>
          <div>View More</div>
          <div>delete</div>
        </div>
      </div>
    </EmailModalHeaderStyled>
    )
}
