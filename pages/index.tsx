import React, { useState } from 'react'
import Head from 'next/head'

// import styles from '@/pages/index.module.css'
import { Upload } from '@/components/upload/upload'
import { UserType } from 'utils/codecs'
import { FormSelector } from '@/components/formSelector/formSelector'
import { Page } from '@geist-ui/core'
import { getUserlistSize } from 'utils/utils'
import { shuffle } from 'utils/shuffle'

export default function Home() {
  const [userList, setUserList] = useState<UserType[]>([])
  
  const doShuffle = (groups:number) => {
    shuffle(userList,groups)
  }
  
  const updateUserList = (userList: UserType[]) => {
    setUserList(userList)
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <Page.Content>
        <Upload updateList={updateUserList} />
        { userList.length >0 && <FormSelector totalSize={getUserlistSize(userList)} onCallback={doShuffle}/> }
        </Page.Content>
      </Page>

    </div>
  )
}
