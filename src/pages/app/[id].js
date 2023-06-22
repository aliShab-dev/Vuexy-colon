import { Email } from '@/component/eMail/emailMain'
import Head from 'next/head'
import Image from 'next/image'
import { MainContainer } from '../../../styles/global'


const Detailed = ({ data }) => {

  return(
    <MainContainer>
{ data.id === 'email' ? <Email /> :<><Head>
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
}    </MainContainer>
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