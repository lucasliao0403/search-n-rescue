import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  async function enterImage() {
      const data = await axios.post("http://localhost:5000/image", 
        {
          body: "beepbeepboopboop"

        }).catch (function (e) {
            console.warn("nope") 
        })
      console.log(data)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.table}>
            <button onClick={enterImage}> button </button>
        </div>
      </main>
    </>
  )
}