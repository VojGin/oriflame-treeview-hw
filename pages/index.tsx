import { DataContextProvider } from 'contexts'
import { Fragment } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import { Tree } from 'components'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Oriflame TreeView HW - VojGin</title>
        <meta name="description" content="Made by Vojtěch Gintner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DataContextProvider>
        <Tree />
      </DataContextProvider>
    </Fragment>
  )
}

export default Home
