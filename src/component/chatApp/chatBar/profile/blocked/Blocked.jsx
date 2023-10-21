import { Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const Blocked = () => {
  return (
    <> 
    <Stack margin={'auto'}>
      <Image
        priority
        alt='blocked user'
        src='/blocked.png'
        width={120}
        height={120}
        />
    </Stack>

  </>
  )
}
