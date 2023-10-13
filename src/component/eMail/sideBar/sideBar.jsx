import styled from "@emotion/styled"
import { Button, Paper, Stack, Typography } from "@mui/material"
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FiberManualRecordTwoToneIcon from '@mui/icons-material/FiberManualRecordTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import StarRateTwoToneIcon from '@mui/icons-material/StarRateTwoTone';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import { useDispatch, useSelector } from "react-redux";
import { selectItem } from "@/component/eMail/sideBar/EmailsidBarHandler";
import { CloseSentModal } from "../index/modal/sentModal/EmailSentModal";
import { CloseEmailModal } from "../index/EmailModalSlicer";


export const SideBarContainer = styled(Stack)(props=>({
  maxWidth:  240,
  minWidth: 240,
  height: '100%',
  padding: props.contact ? '0 7px' : '0',
  overflow: 'hidden',
  overflowY: 'auto',
  width: props.width,
  transition: '.3s ease-out' ,

  '@media(max-width:940px)': {
    opacity: props.show ==='show' ? 1 : .5,
    position: 'absolute',
    left: props.show ==='show' ? 0 : -250,
    top: 0,
    zIndex: 10
  },

  '& .labels':{
    width: '100%',
    gap: '15px',
    padding: '0 15px',
    marginTop: '15px',

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
        fontSize: '10px',
        fontFamily: 'sans-serif',

        '& .MuiSvgIcon-root': {
          marginRight: '7px',
          fontSize: '9px'
        },
      },
    },
  },
  '::-webkit-scrollbar':{
    display: 'none'
  },
}))

const Item = styled(Stack)(props => ({
    width: '100%',
    borderLeft: props.selected && '2px solid #685DD8',
    padding: '5px 15px',
    transition: '.5s ease-out',

    '& .MuiChip-root':{
      fontSize: '8px'
    },
      
    '& span':{
      color: props.selected && '#685DD8',
    },

    '&& .MuiSvgIcon-root': {
      color: props.selected && '#685DD8',
      marginRight: '7px',
      fontSize: '14px',
    },
}))

const Chips = styled(Paper)(props => ({
  color: props.color,
  width: 11,
  height: 11,
  fontSize: 10,
  borderRadius: '50%',
}))

export const SideBar = () => {
  const dispatch = useDispatch()
  const sideBar = useSelector((state) => (state.SideBar.name))
  const showSidebarModal = useSelector(state => (state.SideModal.isOpen))

  return(
    <SideBarContainer
      alignItems='center'
      elevation={0}
      show={showSidebarModal ? 'show' : null}
      width={190}
      bgcolor="background.paper"
      sx={{
        borderRight: (theme) =>
        theme.palette.mode === 'dark' ? '1px solid #434978' : '1px solid #dbdade'
      }}
      >
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          sx={{
            padding: '12px 15px',
            width: '100%',
          }}
           >

          <Button
           variant="contained"
           color="primary"
           sx={{width: '100%'}}
           >

            <Typography
              fontSize={10}
              fontWeight={800}
              color='#fff'
            >
              Contained
            </Typography>
            
          </Button>

        </Stack>

        <Stack
          justifyContent='center'
          alignItems="center"
          width={'100%'}
          >

          <Item
            direction='row'
            justifyContent='space-between'
            alignItems="center"
            selected={sideBar === 'inbox'}
     
            onClick={() => {
              dispatch(selectItem('inbox'))
              dispatch(CloseSentModal())
              dispatch(CloseEmailModal())
              }}>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  cursor: 'pointer'
                }}>

              <MailTwoToneIcon color="icon" />

              <Typography
                  variant="body2"
                  component='span'
                  color='text.icon'
                  fontSize={10}
                 >

                Inbox 
              </Typography>
            </Stack>

              <Chips
                color={'#7367f0'}
                variant="outlined"
                sx={{
                  backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#25293C' : '#ddd',
                }}
                 >
                  <Typography fontSize={8}>
                    12
                  </Typography>
              </Chips>
          </Item>

          <Item
            direction='row'
            justifyContent='space-between'
            alignItems="center"
            selected={sideBar === 'sent'}
            onClick={() => {
              dispatch(selectItem('sent'))
              dispatch(CloseSentModal())
              dispatch(CloseEmailModal())
              }}>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  cursor: 'pointer'
                }}>

                <SendTwoToneIcon color="icon"/>

                <Typography
                  variant="body2"
                  component='span'
                  color='text.icon'
                  fontSize={10}
                 >
                  Sent
                </Typography>
              </Stack>
            <Chips
              variant="outlined"
              color={'#CF6172'}
              sx={{
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#25293C' : '#ddd',
              }}
              >
                <Typography fontSize={8}>
                    12
                  </Typography>
            </Chips>
          </Item>

          <Item 
            direction='row'
            justifyContent='space-between'
            alignItems="center"
            selected={sideBar === 'draft'}
            onClick={() => {
              dispatch(selectItem('draft'))
              dispatch(CloseSentModal())
              dispatch(CloseEmailModal())
              }}>
             <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  cursor: 'pointer'
                }}>
                <DriveFileRenameOutlineIcon color="icon"/>
                <Typography
                  variant="body2"
                  component='span'
                  color='text.icon'
                  fontSize={10}
                  >
                    Draft
                </Typography>
             </Stack>
          </Item>

          <Item
            direction='row'
            justifyContent='space-between'
            alignItems="center" 
            selected={sideBar === 'starred'}
            onClick={() => {
              dispatch(selectItem('starred'))
              dispatch(CloseSentModal())
              dispatch(CloseEmailModal())
            }}>
               <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  cursor: 'pointer'
                }}>

                <StarRateTwoToneIcon color="icon"/>

                <Typography
                  variant="body2"
                  component='span'
                  color='text.icon'
                  fontSize={10}
                  >
                  Starred
                </Typography>
              
              </Stack>

                <Chips
                  color={'#E69143'}
                  variant="outlined"
                  sx={{
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#25293C' : '#ddd',
                  }}
                  >
                  <Typography fontSize={9}>
                    22
                  </Typography>
                </Chips>

          </Item>

          <Item
            direction='row'
            justifyContent='space-between'
            alignItems="center" 
            selected={sideBar === 'spam'}
            onClick={() => {
              dispatch(selectItem('spam'))
              dispatch(CloseSentModal())
              dispatch(CloseEmailModal())
              }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  cursor: 'pointer'
                }}>

                <ErrorTwoToneIcon color="icon"/>

                <Typography
                  variant="body2"
                  component='span'
                  color='text.icon'
                  fontSize={10}
                  >
                  Spam
                </Typography>

            </Stack>
            
          </Item>

          <Item
            direction='row'
            justifyContent='space-between'
            alignItems="center"  
            selected={sideBar === 'trash'}
            onClick={() => {
              dispatch(selectItem('trash'))
              dispatch(CloseSentModal())
              dispatch(CloseEmailModal())
              }}>
             <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                cursor: 'pointer'
              }}>

              <DeleteTwoToneIcon color="icon"/>

              <Typography
                variant="body2"
                component='span'
                color='text.icon'
                fontSize={10}
                >
                Trash
                </Typography>

            </Stack>

          </Item>

        </Stack>

        <Stack
          justifyContent="center"
          alignItems='center'
          className="labels"
          >
              <Typography
                variant="body2"
                component='span'
                fontSize={12}
                fontWeight={700}
                color='text.secondary'
                sx={{
                  alignSelf: 'start'
                }}>
                  Labels
              </Typography>

              <Stack
                direction='row'
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  width: '100%',
                  cursor: 'defualt'
                }}
                className="label"
                >

                   <div className="left">
                  
                    <FiberManualRecordTwoToneIcon sx={{color:'#28C76F'}}/>

                    <Typography
                      variant="body2"
                      component="span"
                      color="text.icon"
                      fontSize={10}
                    >
                      Company
                    </Typography>
                    
                  </div>
              </Stack>

              <Stack
                direction='row'
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  width: '100%',
                  cursor: 'defualt'
                }}
                className="label"
                >

                   <div className="left">

                    <FiberManualRecordTwoToneIcon sx={{color:'#7367F0'}}/>

                    <Typography
                      variant="body2"
                      component="span"
                      color="text.icon"
                      fontSize={10}
                    >Work
                    </Typography>

                  </div>
              </Stack>

              <Stack
                direction='row'
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  width: '100%',
                  cursor: 'defualt'
                }}
                className="label"
                >
                  <div className="left">

                    <FiberManualRecordTwoToneIcon sx={{color:'#00CFE8'}}/>

                    <Typography
                      variant="body2"
                      component="span"
                      color="text.icon"
                      fontSize={10}
                    >
                      Important
                    </Typography>

                  </div>
              </Stack>

              <Stack
                direction='row'
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  width: '100%',
                  cursor: 'defualt'
                }}
                className="label"
                >

                 <div className="left">

                  <FiberManualRecordTwoToneIcon sx={{color:'#EA5455'}}/>

                  <Typography
                    variant="body2"
                    component="span"
                    color="text.icon"
                    fontSize={10}
                  >
                    Private
                  </Typography>

                 </div>
              </Stack>

        </Stack>

      </SideBarContainer>
  )
}