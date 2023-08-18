import styled from "@emotion/styled"
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { displayHandler } from "@/Redux/NavbarSearch";
import {  NavbarLightMode } from "./icon/NavbarLightMode";
import { NavbarIcon } from "./icon/NavbarIcon";
import { AvatarIcon } from "./icon/AvatarIcon";
import { minModalHandler } from "@/Redux/LeftBarCollapse";
import { Button, Paper, Stack, Typography } from "@mui/material";


const Container = styled(Paper)(props => ({
  position: 'fixed',
  width: '70vw',
  minWidth: 500,
  height: 45,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems:'center',
  opacity: .93,
  borderRadius: '5px',
  padding: '0 23px',
  top: 9,
  zIndex: 99,

  '@media(max-width:1200px)': {
       width: '80vw',
  },

  '& .right':{
    position:'relative',
    display: props.display ==='none'? 'flex':'none',
    opacity:  props.display ==='none'? '1':'0',
    gap:6,
    transition: '0.4s ease-in',
  },
  
  '& .left':{
    display: props.display ==='none'? 'flex':'none',
    opacity:  props.display ==='none'? '1':'0',
    transition: '0.4s ease-out',

    '@media(max-width:1200px)': {
      marginLeft: 30,
    },
  },

  '& .search':{
    width: '96%',
    position: 'absolute',
    opacity: props.display.toString()==='block'? '1' : '0',
    bottom: props.display.toString()==='block'? '12px':'-8px',
    transition: '0.2s ease-in',

    '@media(max-width:1200px)': {
      marginLeft: 30,
      width: '91%',
    },

    '& input':{
      backgroundColor : 'inherit',
      border: 'none',
      width: '100%',
      color: '#ACB4D7',

      '&::placeholder':{
      color: '#ACB4D7',
      fontSize: 12
      },

      '&:focus':{
        outline:'none',
      }
    },
  },

  '& .leftBar-collapsed':{
    display: 'none',

    '@media(max-width:1200px)': {
      display: 'flex',
      position: 'absolute',
      left: 15,
    },
  },
}))


export const Navbar = () => {
  const dispatch = useDispatch() 
  const display = useSelector ((state) =>(state.NavbarSearch.isOpen))

  return (  
    <Container
      sx={{boxShadow: 8}}
      elevation={0}
      display={display}
      >

          <Button
           color="icon"
           variant="outlined"
           className="leftBar-collapsed"
           onClick={() => dispatch(minModalHandler(true))}
           sx={{
             minWidth: 0,
             width: 32,
           }}
           >
            <DensityMediumIcon
              color="icon"
              sx={{
                fontSize: 20
              }}
             />
          </Button>
          
          <Button
           color="secondary"
           className="left"
           onClick={()=> dispatch(displayHandler('block'))}
           >

            <SearchTwoToneIcon
              color="primary"
              sx={{
                marginRight: 1,
                fontSize: 18
              }}
               />

            <Typography
              fontSize={12}
              variant="subtitle1"
              component='span'
              color="text.icon"
              >
              Search

            </Typography>

          </Button>
          
          <Stack
           className="right"
           direction="row"
           alignItems='center'
           justifyContent="center"
           >

            <NavbarLightMode />   

            <NavbarIcon name={'List Items'} />

            <NavbarIcon name={'Notifications'} />

            <AvatarIcon name={'User Avatar'}/>

          </Stack>

          <Stack
           className="search"
           direction='row'
           justifyContent='space-between'
           alignItems="center"
           >

            <input  placeholder="Search here ..."/>

            <CloseIcon
             color="icon"
             sx={{
              cursor: 'pointer',
              fontSize: 20
              }}
             onClick={()=> dispatch(displayHandler('none'))}
             />

          </Stack>
      

    </Container>
  )
}