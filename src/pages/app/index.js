import { Email } from '@/component/eMail/EmailMain'
import Head from 'next/head'


const MainContainer = styled.div(props => ({
  width: '50%',
  height: '50%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
  gap: '15px',
  borderRadius: '8px',
  marginBottom: '5px',
  backgroundColor: 'transparent',

  '@media(max-width:1200px)': {
    marginTop: '50px',
},

  
}))


const App = ({data,email}) => {


  return(
    <>
    <Head>
      <title>{data.title}</title>
    </Head>


    {/* <MainContainer style={{background:'#2F3349'}}> */}
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