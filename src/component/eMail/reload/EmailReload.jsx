import styled from '@emotion/styled'
import { Height } from '@mui/icons-material'
import { CircularProgress, Skeleton } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'



export const EmailReloading = styled.div(props=>({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  paddingTop: 20,
  
  '& .email-skeleton':{
    width: '95%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    }
  
}))


export const StyledSkeletonRounded = styled(Skeleton)({
  height: '40px',
  width: '94%'
})
export const StyledSkeletonCircular = styled(Skeleton)({
  height: '35px',
  width: '5%'
})


export const EmailReload = () => {
  const sideBar = useSelector((state) => (state.SideBar.name))
  return (
<>
    { sideBar === 'inbox' ? (
      <EmailReloading >

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
    : 
    (
      <EmailReloading>
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
  </>
  )
}
