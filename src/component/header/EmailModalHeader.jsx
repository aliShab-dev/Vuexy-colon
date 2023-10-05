import styled from '@emotion/styled'
import { Avatar } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { CloseEmailModal } from '@/component/eMail/index/EmailModalSlicer';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import CloseIcon from '@mui/icons-material/Close';
import { CloseSentModal } from '@/component/eMail/sent/EmailSentModal';
import { TextSecondry, TextSmall, TextSmallStrong } from '../eMail/index/modal/style';

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
  const mode = useSelector(state => (state.LightModeHandler.lightMode))

  return (
      <EmailModalHeaderStyled>
        <div className='user-info'>

          <Avatar sx={{width:'40px', height: '40px'}}  alt='user picture' src={pic} />

          <div className="right"> 
          
            <TextSecondry color={mode && '#98A5B8'} >
              {`${detail.first} ${detail.last}`}
            </TextSecondry>

            <TextSmall color={mode && '#98A5B8'} >
              Recruter at Amazon
            </TextSmall>

          </div>
        </div>

        <div className="left">

          <DoNotDisturbIcon fontSize='10'/>
          <MoreVertIcon fontSize='10'/>
          <CloseIcon fontSize='10'  onClick={() => {
            dispatch(CloseSentModal())
            dispatch(CloseEmailModal())}}/>
            
          <div style={{display:'none'}} className='hidden'>

            <TextSmallStrong color={mode && '#98A5B8'} >
              View More
            </TextSmallStrong>

            <TextSmallStrong color={mode && '#98A5B8'} >
              delete
            </TextSmallStrong>

          </div>

        </div>

    </EmailModalHeaderStyled>
    )
}
