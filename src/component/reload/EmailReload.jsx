import styled from '@emotion/styled'
import { Height } from '@mui/icons-material'
import { CircularProgress, Skeleton } from '@mui/material'
import React from 'react'



export const EmailReloading = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  margin: 'auto',
  
  '& .email-skeleton':{
    width: '95%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    }
  
})


export const StyledSkeletonRounded = styled(Skeleton)({
  height: '40px',
  width: '93%'
})
export const StyledSkeletonCircular = styled(Skeleton)({
  height: '35px',
  width: '5%'
})


export const EmailReload = () => {
  return (
    <EmailReloading>
      <div className='email-skeleton'>
        <StyledSkeletonCircular variant="circular"  />
        <StyledSkeletonRounded  variant="rounded"  />
      </div>
      <div className='email-skeleton'>
        <StyledSkeletonCircular variant="circular"  />
        <StyledSkeletonRounded  variant="rounded"  />
      </div>
      <div className='email-skeleton'>
        <StyledSkeletonCircular variant="circular"  />
        <StyledSkeletonRounded  variant="rounded"  />
      </div>
      <div className='email-skeleton'>
        <StyledSkeletonCircular variant="circular"  />
        <StyledSkeletonRounded  variant="rounded"  />
      </div>
      <div className='email-skeleton'>
        <StyledSkeletonCircular variant="circular"  />
        <StyledSkeletonRounded  variant="rounded"  />
      </div>
      <div className='email-skeleton'>
        <StyledSkeletonCircular variant="circular"  />
        <StyledSkeletonRounded  variant="rounded"  />
      </div>
      <div className='email-skeleton'>
        <StyledSkeletonCircular variant="circular"  />
        <StyledSkeletonRounded  variant="rounded"  />
      </div>
      <div className='email-skeleton'>
        <StyledSkeletonCircular variant="circular"  />
        <StyledSkeletonRounded  variant="rounded"  />
      </div>
      <div className='email-skeleton'>
        <StyledSkeletonCircular variant="circular"  />
        <StyledSkeletonRounded  variant="rounded"  />
      </div>
      <div className='email-skeleton'>
        <StyledSkeletonCircular variant="circular"  />
        <StyledSkeletonRounded  variant="rounded"  />
      </div>
      <div className='email-skeleton'>
        <StyledSkeletonCircular variant="circular"  />
        <StyledSkeletonRounded  variant="rounded"  />
      </div>
      <div className='email-skeleton'>
        <StyledSkeletonCircular variant="circular"  />
        <StyledSkeletonRounded  variant="rounded"  />
      </div>
 
    </EmailReloading>
  )
}
