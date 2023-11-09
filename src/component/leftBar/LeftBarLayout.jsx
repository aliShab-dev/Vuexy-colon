import React from 'react'
import { useState } from "react"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { List, ListSubheader, Stack, Typography } from "@mui/material"
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ForumIcon from '@mui/icons-material/Forum';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useDispatch, useSelector } from "react-redux";
import { minModalHandler, modalLeftBar } from "@/Redux/LeftBarCollapse";
import { Button } from "./component/button/Button";
import { Accordian } from "./component/accrodian & collapse/Accordian";
import { CollapseComponent } from "./component/accrodian & collapse/Collapse";
import { accordianHandler } from "./component/accrodian & collapse/AccordianSlicer";
import { btnHandler } from "./component/button/ButtonSlicer";
import { Container, StyledHeader } from "./leftbar";


const apps = [{"id":"","name":"Main","icon":<DomainVerificationIcon color="icon" fontSize="small"/>},{"id":"app/email","name":"Email","icon":<MailOutlineIcon color="icon" fontSize="small"/>},{"id":"app/stock","name":"Stock","icon":<ShowChartIcon color="icon" fontSize="small" />},{"id":"app/shop","name":"Shop","icon":<DomainVerificationIcon color="icon" fontSize="small"/>},{"id":"app/movie","name":"Movie","icon":<LiveTvIcon color="icon" fontSize="small" />},{"id":"app/chat","name":"Chat","icon":<ForumIcon color="icon" fontSize="small" />},{"id":"app/crypto","name":"Crypto","icon":<CurrencyBitcoinIcon color="icon" fontSize="small" />}]



const accordian = [
  {
    accordian:{
      name: 'Dashboards',
      icon: <LineStyleIcon color="icon" fontSize="small"/>,
    },
    collapse: [
      {  
        id:1,
        name: 'Analytics',
        to: 'dashboard/analytics'
      },
      { 
        id:2,
        name: 'Dashboard',
        to: 'dashboard/dashboard'
      },
    ]
  },

  {
    accordian: {
      name: 'Layout',
      icon: <LiveTvIcon color="icon" fontSize="small"/>,
    },
    collapse: [
      {  
        id:1,
        name: 'Collapsed Menu',
        to: 'collapsed-menu'
      },
      { 
        id:2,
        name: 'Content Navbar',
        to: 'content-navbar'
      },
      { 
        id:3,
        name: 'Without Menu',
        to: 'without-menu'
      },
      { 
        id:4,
        name: 'Without Side-Bar',
        to: 'without-side-bar'
      },
      { 
        id:5,
        name: 'Container',
        to: 'container'
      },
    ]
  },
  {
    accordian: {
      name: 'Icons',
      icon: <LiveTvIcon color="icon" fontSize="small"/>,
    },
    collapse: [
      {  
        id:1,
        name: 'Table',
        to: '/'
      },
      { 
        id:2,
        name: 'MUI Icons',
        to: '/'
      },
    ]
  },
  {
    accordian: {
      name: 'Extended UI',
      icon: <LiveTvIcon color="icon" fontSize="small"/>,
    },
    collapse: [
      {  
        id:1,
        name: 'Media Player',
        to: '/'
      },
      { 
        id:2,
        name: 'BLock UI',
        to: '/'
      },
    ]
  },
  {
    accordian: {
      name: 'Extended UI',
      icon: <LiveTvIcon color="icon" fontSize="small"/>,
    },
    collapse: [
      {  
        id:1,
        name: 'Media Player',
        to: '/'
      },
      { 
        id:2,
        name: 'BLock UI',
        to: '/'
      },
    ]
  },
]

export const LeftBarLayout = () => {
  const dispatch = useDispatch()
  const ShowMinModal = useSelector(state => (state.LeftBarCollapse.ShowMinModal))
  const selectedBtn = useSelector(state => (state.ButtonSlicer.selectedBtn))
 
 //// left bar Toggler ( onMouse over !!! ) /////
  const [LeftDis, setleftDis] = useState('open')
  const [close, setClose]= useState(false)

  const leftBarHandler = (ev) => {
     if(close) {
      setleftDis(ev)
      if(LeftDis==='open') {
        dispatch(accordianHandler(false))
      } else {
        dispatch(accordianHandler(true))
      }
    }
  }

  useEffect( () => {
    const selectedBtn = JSON.parse(localStorage.getItem('app')) 
    selectedBtn && dispatch(btnHandler(selectedBtn))
   },[])


  
  useEffect(() =>{
    dispatch(minModalHandler(false))
  },[selectedBtn]) 
  
    return(
     <Container
      elevation={0}
      display={ShowMinModal ? 'open' : LeftDis}
      show={ShowMinModal? 'open' : 'close'}
      onMouseEnter={() => leftBarHandler('open')}
      onMouseLeave={() => leftBarHandler('close')}
      >

      <StyledHeader
       setclose={ShowMinModal ? 'open' : LeftDis}
       sx={{
        boxShadow: 8
       }}>
          <Stack
            direction="row" 
            justifyContent="space-between"
            alignItems="center"
            >


          <Link href='/'>

            <Image src='/React-icon.svg' alt="React Logo" width={50} height={50}/>

            <Typography
             fontSize={22}
             color="text.icon"
             fontWeight={600}
             variant="h3" 
             >
                Vuexy
            </Typography>

          </Link>
        {
         !ShowMinModal? (close? ( 
            <ArrowForwardIosIcon 
              sx={{
                paddingLeft: '2px',
                borderColor: 'secondary'
              }}
              color="icon"
              onClick={() => {
                dispatch(modalLeftBar(true))
                setClose(false)
                setleftDis('open')}} 
                />
                ) : ( 
            <ArrowBackIosIcon 
              sx={{
                paddingLeft: '4px',
                borderColor: 'secondary'
              }}
              color="icon"
              onClick={() => {
                dispatch(modalLeftBar(false))
                setClose(true)
                setleftDis('close')}}
                /> 
                )) : (
            <CloseRoundedIcon
              sx={{
                borderColor: 'secondary'
              }}
              color="icon"
              onClick={() => dispatch(minModalHandler(false))}
              />
             )
        }
       </Stack>
     </StyledHeader>

          <List
            sx={{ width: '100%' }}
            component="ul"
            >
              
              <Accordian
               index={1}
               item={accordian[0].accordian}
               LeftDis={LeftDis}
               show={ShowMinModal? 'open' : LeftDis}
               />

              <CollapseComponent
               index={1} 
               items={accordian[0].collapse}
               />
              
              <Accordian
               index={2}
               item={accordian[1].accordian}
               LeftDis={LeftDis}
               show={ShowMinModal? 'open' : LeftDis}
               />

              <CollapseComponent
               index={2} 
               items={accordian[1].collapse}
               />

          </List>
          
          <List
            sx={{ width: '100%' }}
            component="ul"
            subheader={
              <ListSubheader
                sx={{
                  backgroundColor: 'inherit',
                  color: 'text.secondary',
                  paddingLeft: 3,
                  lineHeight: 2,
                  fontSize: 11,
                  cursor: 'default',
                }}
                component="span"
                id="nested-list-subheader"
                >

                  {
                  ShowMinModal? (
                    'Apps & Pages'
                    ) : (
                    LeftDis === 'close'?
                    '---' 
                    :
                    'Apps & Pages'
                    )
                  }

              </ListSubheader>
              }>

              {
              apps.map(app => (

                <Button
                 key ={app.name}
                 item={app}
                 LeftDis={LeftDis}
                 show={ShowMinModal? 'open' : LeftDis}
                 />

              ))
              }

              <Accordian
               index={3}
               item={accordian[2].accordian}
               LeftDis={LeftDis}
               show={ShowMinModal? 'open' : LeftDis}
               />

              <CollapseComponent
               index={3} 
               items={accordian[2].collapse}
               />

              <Accordian
               index={4}
               item={accordian[2].accordian}
               LeftDis={LeftDis}
               show={ShowMinModal? 'open' : LeftDis}
               />

              <CollapseComponent
               index={4} 
               items={accordian[2].collapse}
               />
        
          </List>

          <List
          sx={{ width: '100%'}}
          component="div"
          subheader={
            <ListSubheader
              sx={{
                backgroundColor: 'inherit',
                color: 'text.secondary',
                paddingLeft: 3,
                lineHeight: 2,
                fontSize: 11,
                cursor: 'default'
              }}
              component="span"
              id="nested-list-subheader"
              >
                {
                ShowMinModal ? (
                  'Extended UI'
                  ) : (
                  LeftDis === 'close'? '---' : 'Extended UI'
                  )
                } 

            </ListSubheader>
          }
         >

          <Accordian
            index={5}
            item={accordian[2].accordian}
            LeftDis={LeftDis}
            show={ShowMinModal? 'open' : LeftDis}
            />

          <CollapseComponent
            index={5} 
            items={accordian[2].collapse}
            />
         
          <Button
            item={{
              id: 'ui/leaflet Map',
              name: 'Leaflet Map',
              icon: <LiveTvIcon color="icon" fontSize="small"/>
            }}
            LeftDis={LeftDis}
            show={ShowMinModal? 'open' : LeftDis}
            />
          
          </List>

         <List
          sx={{ width: '100%' }}
          component="ul"
          subheader={
            <ListSubheader
              sx={{
                backgroundColor: 'inherit',
                color: 'text.secondary',
                paddingLeft: 3,
                lineHeight: 2,
                fontSize: 11,
                cursor: 'default'
               }}
               component="span"
               id="nested-list-subheader"
              >

              {
              ShowMinModal? (
                'MISC'
                ) : (
                LeftDis === 'close'? '---' : 'MISC'
                )
              } 

            </ListSubheader>
          }
        >
            
            <Button
             item={{
              id:'misc/support',
              name: 'Support',
              icon:<LiveTvIcon color="icon" fontSize="small"/>
             }}
             LeftDis={LeftDis}
             show={ShowMinModal? 'open' : LeftDis}
             />

             
            <Button
             item={{
              id:'misc/documentaion',
              name: 'Documentaion',
              icon:<LiveTvIcon color="icon" fontSize="small"/>
             }}
             LeftDis={LeftDis}
             show={ShowMinModal? 'open' : LeftDis}
             />
            
  
            <Button
             item={{
              id:'about-us',
              name: 'About Us',
              icon:<LiveTvIcon color="icon" fontSize="small"/>
             }}
             LeftDis={LeftDis}
             show={ShowMinModal? 'open' : LeftDis}
             />

          </List>

      </Container>
  )
};





