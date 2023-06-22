import styled from "@emotion/styled"
import Link from "next/link"


const FooterContainer = styled.div({
  display : 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',

  '& .left':{
    display: 'flex',
    justifyContent:'space-evenly',
    alignItems: 'center',

    '& p':{
      color:'#ACB4D7',
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
      color:'#ACB4D7'
    }
  }
})



const Footer = () => {



  return(
    <FooterContainer>
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