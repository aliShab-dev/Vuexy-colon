import { Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const Empty = () => {
  return (
    <> 
      <Stack
      margin={'auto'}>
        <Image alt='send massage' src='/send-massage.png' width={120} height={120}/>
      </Stack>

    </>
  )
}
