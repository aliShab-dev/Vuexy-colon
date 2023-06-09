import styled from "@emotion/styled"
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { displayHandler } from "@/Redux/NavbarSearch";
import {  NavbarLightMode } from "./icon/NavbarLightMode";
import { NavbarIcon } from "./icon/NavbarIcon";
import { AvatarIcon } from "./icon/AvatarIcon";

const Container = styled.div(props => ({
  width: '68vw',
  height: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems:'center',
  backgroundColor: '#2D3249',
  opacity: '.96',
  borderRadius: '5px',
  padding: '0 20px',
  position: 'fixed',
  top: '9px',
  boxShadow: '-2px 2px 4px -2px #25293E',
  zIndex: 99,

  

  '& .right':{
    position:'relative',
    display: props.display ==='none'? 'flex':'none',
    opacity:  props.display ==='none'? '1':'0',
    alignItems: 'center',
    justifyContent: 'center',
    gap:'6px',
    transition: '0.4s ease-in',
    
    '& .MuiSvgIcon-root': {
      color: '#ACB4D7',
      cursor: 'pointer'
    },
  },

  '& .left':{
    display: props.display ==='none'? 'flex':'none',
    opacity:  props.display ==='none'? '1':'0',
    justifyContent:'center',
    alignItems: 'center',
    border:'none',
    background: 'inherit',
    cursor: 'pointer',
    color: '#6A73A5',
    transition: '0.4s ease-out',

    '& p':{
      fontSize: '12px',
      color:'#7A809F'
    },
  
    '& .MuiSvgIcon-root': {
      color: '#ACB4D7',
      marginRight: '2px',
      fontSize: '15px',
    },
  },

  '& .search':{
    width: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    opacity: props.display.toString()==='block'? '1' : '0',
    bottom: props.display.toString()==='block'? '9px':'-25px',
    transition: '0.1s ease-out',
    padding:'0 25px',

    '& input':{
      backgroundColor : 'inherit',
      border: 'none',
      width: '100%',
      color: '#ACB4D7',

      '&::placeholder':{
      color: '#7A809F',
      fontSize: '12px'
      },

      '&:focus':{
        outline:'none',
      }
    },

    '& .MuiSvgIcon-root': {
      color: '#ACB4D7',
      fontSize: '20px',
      marginRight: '7px'
    },
  }


}))

export const Navbar = () => {

  const dispatch = useDispatch() 
  const display = useSelector ((state) =>(state.NavbarSearch.isOpen))
  const tooltipName = useSelector((state) => state.NavbarTooltip.tooltipName)
  
  console.log(tooltipName)

  return (
    <Container display={display}>

          <button className="left"
          onClick={()=> dispatch(displayHandler('block'))}>
            <SearchTwoToneIcon />
            <p>Search</p>
          </button>

          <div className="right">
            <NavbarLightMode />   
            <NavbarIcon name={'List Items'} />
            <NavbarIcon name={'Notifications'} />
            <AvatarIcon name={'User Avatar'}/>
          </div>

            {/* hidden search bar */}
              <div className="search">
                <input  placeholder="Search here ..."/>
                <CloseIcon sx={{cursor: 'pointer'}} onClick={()=> dispatch(displayHandler('none'))}/>
              </div>
            {/* hidden search bar */}

    </Container>
  )
}