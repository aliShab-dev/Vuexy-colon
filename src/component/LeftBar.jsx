import { Collapse, Icon, List, ListSubheader, } from "@mui/material"
import { useState } from "react"
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ForumIcon from '@mui/icons-material/Forum';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { StyledAccordian, StyledHeader, StyledListItemButton, Container } from "../../styles/leftbar";
import Image from "next/image";





/// need spining logo and footer ///
const apps = [{"id":"","title":"Main","icon":<DomainVerificationIcon fontSize="small"/>},{"id":"email","title":"Email","icon":<MailOutlineIcon fontSize="small"/>},{"id":"stock","title":"Stock","icon":<ShowChartIcon fontSize="small" />},{"id":"shop","title":"Shop","icon":<DomainVerificationIcon fontSize="small"/>},{"id":"movie","title":"Movie","icon":<LiveTvIcon fontSize="small" />},{"id":"chat","title":"Chat","icon":<ForumIcon fontSize="small" />},{"id":"crypto","title":"Crypto","icon":<CurrencyBitcoinIcon fontSize="small" />}]

/// will be added by Redux ///




export const Leftbar = () => {

///// button select handler /////
  const [selectedIndex, setSelectedIndex] = useState()

  const selectHandler = (e,index) =>{
    setSelectedIndex(index)
  } 

  
//////// accordian open/close handler //////////
  const [openedIndex, setOpenedIndex] = useState(1)
  const [open, setOpen] = useState(true);

  const handleClick = (index) => {
      if(openedIndex === index){
        setOpen(!open)
      }else{
        setOpen(true)
        setOpenedIndex(index)
      }
    }

      //// left bar Toggler /////
  const [LeftDis, setleftDis] = useState('open')
  const [close, setClose]= useState(false)
  
  const leftBarHandler = (ev) => {
    if(close){
      setleftDis(ev)
      if(LeftDis==='open'){
        setOpen(false)
      }else{
        setOpen(true)
      }
    }
  }
    
    
    
    return(
      <Container
      display={LeftDis}
      onMouseEnter={e=> leftBarHandler('open')}
      onMouseLeave={e=> leftBarHandler('close')}
      >

          <StyledHeader setclose={LeftDis}>
        <Link href='/'>
          <Image src='/React-icon.svg' alt="React Logo" width={50} height={50}/>
          <p >
              Vuexy
          </p>
        </Link>
    
        {
          close?<ArrowForwardIosIcon onClick={e=>{setClose(false)
            setleftDis('open')}} /> : <ArrowBackIosIcon onClick={e=>{setClose(true)
              setleftDis('close')}}/>  
          
        }

          </StyledHeader>

          <List
          sx={{ width: '100%', bgcolor: 'inherit' }}
          component="div">
              
              <StyledAccordian
              setclose={LeftDis} 
              selected={openedIndex === 1}
              onClick={e=>handleClick(1)}>
                          <Icon>
                            <LineStyleIcon fontSize="small"/>
                          </Icon>
                      <p>Dashboards</p>
                <div style={{marginLeft: '40px'}}>
                      {open && openedIndex === 1 ? <ExpandMoreIcon fontSize="small"  /> : <NavigateNextIcon fontSize="small" />}
                </div>
              </StyledAccordian >

              <Collapse in={open && openedIndex === 1 && open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                  <StyledListItemButton sx={{ pl: 4 }}>
                  <Icon sx={{width: '7px', marginLeft: '5px', marginRight: '8px'}} >
                        <HdrStrongIcon fontSize="small"/>
                    </Icon>
                    <p>Analytics</p>
                  </StyledListItemButton>

                  <StyledListItemButton sx={{ pl: 4 }}>
                  <Icon sx={{width: '7px', marginLeft: '5px', marginRight: '8px'}} >
                        <HdrStrongIcon fontSize="small"/>
                    </Icon>
                    <p>CRM</p>
                  </StyledListItemButton>
                  
                  <StyledListItemButton sx={{ pl: 4 }}>
                  <Icon sx={{width: '7px', marginLeft: '5px', marginRight: '8px'}} >
                        <HdrStrongIcon fontSize="small"/>
                    </Icon>
                    <p>eCommerce</p>
                  </StyledListItemButton>

                </List>
              </Collapse>

              <StyledAccordian
              selected={openedIndex === 2}
              onClick={e=>handleClick(2)}
              setclose={LeftDis}>
                    <Icon>
                        <LiveTvIcon fontSize="small"/>
                    </Icon>
                <p>Layout</p>
              <div style={{marginLeft: '65px'}}>
                {open && openedIndex === 2 ? <ExpandMoreIcon fontSize="small"  /> : <NavigateNextIcon fontSize="small" />}
              </div>
              </StyledAccordian >

              <Collapse in={open && openedIndex === 2 && open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                  <StyledListItemButton sx={{ pl: 4 }}>
                  <Icon sx={{width: '7px', marginLeft: '5px', marginRight: '8px'}} >
                        <HdrStrongIcon fontSize="small"/>
                    </Icon>
                    <p>Collapsed Menu</p>
                  </StyledListItemButton>

                  <StyledListItemButton sx={{ pl: 4 }}>
                  <Icon sx={{width: '7px', marginLeft: '5px', marginRight: '8px'}} >
                        <HdrStrongIcon fontSize="small"/>
                    </Icon>
                    <p>Content Navbar</p>
                  </StyledListItemButton>
                  
                  <StyledListItemButton sx={{ pl: 4 }}>
                  <Icon sx={{width: '7px', marginLeft: '5px', marginRight: '8px'}} >
                        <HdrStrongIcon fontSize="small"/>
                    </Icon>
                    <p>Without Menu</p>
                  </StyledListItemButton>

                  <StyledListItemButton sx={{ pl: 4 }}>
                  <Icon sx={{width: '7px', marginLeft: '5px', marginRight: '8px'}} >
                        <HdrStrongIcon fontSize="small"/>
                    </Icon>
                    <p>Without Navbar</p>
                  </StyledListItemButton>

                  <StyledListItemButton sx={{ pl: 4 }}>
                  <Icon sx={{width: '7px', marginLeft: '5px', marginRight: '8px'}} >
                        <HdrStrongIcon fontSize="small"/>
                    </Icon>
                    <p>Container</p>
                  </StyledListItemButton>

                  <StyledListItemButton sx={{ pl: 4 }}>
                  <Icon sx={{width: '7px', marginLeft: '5px', marginRight: '8px'}} >
                        <HdrStrongIcon fontSize="small"/>
                    </Icon>
                    <p>Fluid</p>
                  </StyledListItemButton>

                </List>
              </Collapse>

          </List>
          
              
          <List
          sx={{ width: '100%', bgcolor: 'inherit' }}
          component="div"
          subheader={
            <ListSubheader  sx={{bgcolor: 'inherit',color:'#7A809F',fontFamily: 'sans-serif',paddingLeft:'21px',lineHeight:'23px',fontSize: '11px'}} component="div" id="nested-list-subheader">
              {LeftDis === 'close'? '---' : 'Apps & Pages'}  
            </ListSubheader>
          }>
            <Link  href={'/dashboard'}>

              <StyledListItemButton
               setclose={LeftDis}
               selected={'dashboard' === selectedIndex}
               onClick={e => selectHandler(e,'dashboard')}
              >
              <Icon>
                    <DashboardCustomizeIcon fontSize="small"/>
              </Icon>
                <p> Dashboard </p>
              </StyledListItemButton>

            </Link>
              {
              apps.map(app => (
                <Link key={app.id || "main"} href={ app.id ?`/app/${app.id}`: '/'}>

                    <StyledListItemButton
                      setclose={LeftDis}
                      selected={app.id === selectedIndex}
                      onClick={e => selectHandler(e, app.id)}>

                      <Icon>
                          {app.icon}
                      </Icon>

                      <p >
                        {app.title}
                      </p>

                    </StyledListItemButton>

                </Link>

              ))
              }

          <StyledAccordian
          selected={openedIndex === 3}
          onClick={e=>handleClick(3)}
          setclose={LeftDis}>
                      <Icon>
                          <LiveTvIcon fontSize="small"/>
                      </Icon>
                  <p>Icons</p>
                <div style={{marginLeft: '70px'}}>
                  {open && openedIndex === 3 ? <ExpandMoreIcon fontSize="small"  /> : <NavigateNextIcon fontSize="small" />}
                </div>
          </StyledAccordian >

          <Collapse in={open && openedIndex === 3 && open} timeout="auto" unmountOnExit> 
            <List component="div" disablePadding>

              <StyledListItemButton sx={{ pl: 4 }}>
              <Icon sx={{width: '7px', marginLeft: '5px', marginRight: '8px'}} >
                    <HdrStrongIcon fontSize="small"/>
                </Icon>
                <p>Table</p>
              </StyledListItemButton>

              <StyledListItemButton sx={{ pl: 4 }}>
              <Icon sx={{width: '7px', marginLeft: '5px', marginRight: '8px'}} >
                    <HdrStrongIcon fontSize="small"/>
                </Icon>
                <p>MUI Icons</p>
              </StyledListItemButton>

            </List>
          </Collapse>

          
          <StyledAccordian
          selected={openedIndex === 4}
          onClick={e=>handleClick(4)}
          setclose={LeftDis}>
                <Icon>
                    <LiveTvIcon fontSize="small"/>
                </Icon>
            <p>Extended UI</p>
          <div style={{marginLeft: '50px'}}>
            {open && openedIndex === 4 ? <ExpandMoreIcon fontSize="small"  /> : <NavigateNextIcon fontSize="small" />}
          </div>
          </StyledAccordian >

          <Collapse in={open && openedIndex === 4 && open} timeout="auto" unmountOnExit> 
            <List component="div" disablePadding>

          <StyledListItemButton  setclose={LeftDis} sx={{ pl: 4 }}>
          <Icon sx={{width: '7px', marginLeft: '5px', marginRight: '8px'}} >
                <HdrStrongIcon fontSize="small"/>
            </Icon>
            <p>Media Player</p>
          </StyledListItemButton>

          <StyledListItemButton  setclose={LeftDis} sx={{ pl: 4 }}>
          <Icon sx={{width: '7px', marginLeft: '5px', marginRight: '8px'}} >
                <HdrStrongIcon fontSize="small"/>
            </Icon>
            <p>BLock UI</p>
          </StyledListItemButton>

            </List>
          </Collapse>

          </List>

          <List
          sx={{ width: '100%', bgcolor: 'inherit' }}
          component="div"
          subheader={
            <ListSubheader  sx={{bgcolor: 'inherit',color:'#7A809F',fontFamily: 'sans-serif',paddingLeft:'21px',lineHeight:'23px',fontSize: '11px'}} component="div" id="nested-list-subheader">
            {LeftDis === 'close'? '---' : 'Charts & Maps'}  
            </ListSubheader>
          }>
          <StyledAccordian
          selected={openedIndex === 5}
          onClick={e=>handleClick(5)}
          setclose={LeftDis}>
        <Icon>
            <LiveTvIcon fontSize="small"/>
        </Icon>
    <p>Extended UI</p>
    <div style={{marginLeft: '50px'}}>
    {open && openedIndex === 5 ? <ExpandMoreIcon fontSize="small"  /> : <NavigateNextIcon fontSize="small" />}
    </div>
          </StyledAccordian >

          <Collapse in={open && openedIndex === 5 && open} timeout="auto" unmountOnExit> 
            <List component="div" disablePadding>

          <StyledListItemButton  setclose={LeftDis} sx={{ pl: 4 }}>
          <Icon sx={{width: '7px', marginLeft: '5px', marginRight: '8px'}} >
                <HdrStrongIcon fontSize="small"/>
            </Icon>
            <p>Media Player</p>
          </StyledListItemButton>

          <StyledListItemButton  setclose={LeftDis} sx={{ pl: 4 }}>
          <Icon sx={{width: '7px', marginLeft: '5px', marginRight: '8px'}} >
                <HdrStrongIcon fontSize="small"/>
            </Icon>
            <p>BLock UI</p>
          </StyledListItemButton>

            </List>
          </Collapse>

          <StyledListItemButton 
              selected={1 === selectedIndex}
              onClick={e => selectHandler(e,1)}
              setclose={LeftDis}>

              <Icon >
                <LiveTvIcon fontSize="small"/>
              </Icon>

              <p >
                Leaflet Map
              </p>

          </StyledListItemButton>

          </List>


          <List
          sx={{ width: '100%', bgcolor: 'inherit' }}
          component="div"
          subheader={
            <ListSubheader  sx={{bgcolor: 'inherit',color:'#7A809F',fontFamily: 'sans-serif',paddingLeft:'21px',lineHeight:'23px',fontSize: '11px'}} component="div" id="nested-list-subheader">
              {LeftDis === 'close'? '---' : 'MISC'}
            </ListSubheader>
          }>
            
          <StyledListItemButton 
          setclose={LeftDis}
          selected={1 === selectedIndex}
          onClick={e => selectHandler(e,1)}>

          <Icon >
            <LiveTvIcon fontSize="small"/>
          </Icon>

          <p >
            Support 
          </p>

      </StyledListItemButton>

      
    <StyledListItemButton 
    setclose={LeftDis}
    selected={1 === selectedIndex}
    onClick={e => selectHandler(e,1)}>

    <Icon >
      <LiveTvIcon fontSize="small"/>
    </Icon>

    <p >
      Documentaion
    </p>

    </StyledListItemButton>

    <StyledListItemButton 
    setclose={LeftDis}
    selected={1 === selectedIndex}
    onClick={e => selectHandler(e,1)}>

    <Icon >
      <LiveTvIcon fontSize="small"/>
    </Icon>

    <p >
      About Us
    </p>

    </StyledListItemButton>

          </List>
      



      </Container>
  )

};




