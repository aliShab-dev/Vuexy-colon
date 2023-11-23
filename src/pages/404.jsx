import { Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const NotFound = () => {
  const router = useRouter()
  return (
    <Grid
      container
      height={'85vh'}
      width={'100%'}
     
      sx={{
        '@media(max-width:1200px)': {
          marginTop: '50px',
        },
      }}
      >
      <Grid
        item
        margin={'auto'}
        direction={'column'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={3}
        >
          <Image
            src={'/404-15.svg'}
            alt={'404'}
            width={300}
            height={200}
            />

          <Typography
            fontWeight={700}
            variant={'h4'}
            fontSize={16}
            color={'text.primary'}
            >
            NotFound
          </Typography>
          
          <Typography
            fontWeight={300}
            variant={'body'}
            fontSize={11}
            color={'text.icon'}
            >
            the page not found please maybe you look for something else.
          </Typography>

          <Button
            color={'primary'}
            variant={'contained'}
            onClick={() => router.back()}>
              <Typography
                fontWeight={500}
                variant={'body2'}
                fontSize={12}
                color={'white'}
                >
                  back to previous page 
              </Typography>
          </Button>
        
      </Grid>

    </Grid>
  )
}

export default NotFound