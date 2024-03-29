import Head from 'next/head'
import { Main } from '@/component/Main'
 

export default function Home({ data }) {

  return (
    <>
      <Head>
        <title>data</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <Main data={ data }/>
    </>
  )
}

export async function getServerSideProps () {
  const { all_pages } = await import('../data/data')
 
  return{
    props: {data: all_pages}
 }
}