import { Email } from '@/component/eMail/EmailMain'
import Head from 'next/head'


const App = ({data,email}) => {


  return(
    <>
    <Head>
      <title>{data.title}</title>
    </Head>

    <Email email={email}/>
    
    </>
  )
}

export default App

export  async function getStaticProps(context) {
  const {all_pages} = await import ('../../../data/data')
  const app = context?.params.apps
  const pageDetail = all_pages.find(page => {
    return page.id === app
  })

  const res = await fetch('https://randomuser.me/api/?results=16')
  const email = await res.json()  
  
  return{
    props: {
      data: pageDetail,
      email: email.results
    }
  }
}


export async function getStaticPaths() {
  const {all_pages} = await import ('../../../data/data') 
  const allPaths = all_pages.map(page => {
    return {
      params:{
        apps: page.id.toString()
      }
    }
  })

  return{
    paths: allPaths,
    fallback: false
  }
}