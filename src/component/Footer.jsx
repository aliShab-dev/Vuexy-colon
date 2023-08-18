import styled from "@emotion/styled"
import Link from "next/link"
import { useSelector } from "react-redux"


const FooterContainer = styled.div(props =>({
  display : 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: 10,

  '& .left':{
    display: 'flex',
    justifyContent:'space-evenly',
    alignItems: 'center',

    '& p':{
      color: props.lightMode ? '#2F3349' : '#ACB4D7',
      fontSize:'10px'
    },
    '& a': {
      color:'#695FD8'
    }
  },

  '& .right':{
    display:'flex',
    gap:'15px',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    '& a': {
      fontSize:'10px',
      color: props.lightMode ?'#2F3349' : '#ACB4D7'
    }
  }
}))



const Footer = () => {
  const mode = useSelector(state => (state.LightModeHandler.lightMode))

  return(
    <FooterContainer lightMode={mode}>
      <div className="left">
        <p>&copy; 2023, made by Next.Js by <Link  href={'/'}>Ali Shabani</Link></p>
      </div>

      <div className="right">
        <Link href={'/'}>Support</Link>
        <Link href={'/'}>Licennse</Link>
        <Link href={'/'}>Documentation</Link>
      </div>
    </FooterContainer>
  )
}

export default Footer