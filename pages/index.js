import Head from 'next/head'
import { Inter } from 'next/font/google'
import axios from 'axios'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <h1>weather app</h1>
      </main>
    </>
  )
}

Home.getInitialProps = async () => {
  const res = await axios.get("https://api.weatherapi.com/v1/current.json?key=67ca48d558fa4143a9600726230708&q=London&aqi=no");
  const {data} = res
  console.log(data)
  return{data: data}
}