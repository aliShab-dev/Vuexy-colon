import { Email } from '@/component/eMail/emailMain'
import { fetchData } from '@/Redux/EmailData'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainContainer } from '../../../styles/global'


const Detailed = ({ data, email }) => {
//  const {movies} = page
const dispatch = useDispatch()
dispatch(fetchData(email))


  
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
  const res = await fetch('https://randomuser.me/api/?results=16')
  const email = await res.json()
 

  return {
    props:{
      data: detail,
      email: email
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