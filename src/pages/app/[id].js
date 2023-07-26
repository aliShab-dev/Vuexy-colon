import { ChatLayout } from '@/component/chatApp/Layout'
import { Email } from '@/component/eMail/EmailMain'
import Head from 'next/head'
import Image from 'next/image'
import { EmailContainer } from '../../../styles/email/mainEmail/mailnEmail'
import { MainContainer } from '../../../styles/global'


const Detailed = ({ data }) => {
  
const renderParam = (data) => {
  switch( data.id ) {
    case 'email':
     return (<Email />)
      break;
    case 'chat':
     return (<ChatLayout />)
      break;
    default:
     return (
        <>
        <Head>
              <title>{data.title}</title>
        </Head>
            <div>
              Detailed aAP
              <h2>{data.title}</h2>
              pp
              <p>{data.disc}</p>
              <Image width={100} height={100} src={data.img} alt={data.title}/>
            </div>
        </>
        )
  }
}
  
  return(
    // <MainContainer>
      <EmailContainer>
      {
        renderParam(data)
      }
      </EmailContainer>
  //  </MainContainer>
  )
}

export default Detailed

export async function getStaticProps (context) {
  const {all_pages} = await import ('../../data/data')
  const event = context?.params.id
  const detail = all_pages.find(item =>{
    return item.id === event.toLowerCase()
  })  
 

  return {
    props:{
      data: detail
    }
  }
}

export async function getStaticPaths () {
  const {all_pages} = await import ('../../data/data')
  const appPath = all_pages.map(page => {
    return{
      params: {
        apps: page.id,
        id: page.id
      }
    }
  })
  
    return {
      paths: appPath,
      fallback: false
    }
}