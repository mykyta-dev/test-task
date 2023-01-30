import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { TablePage } from './TablePage'
import { Provider } from 'react-redux';
import store from '@/store';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <Provider store={store}>
          <TablePage />
        </Provider>
      </main>
    </>
  )
}