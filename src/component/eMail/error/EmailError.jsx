import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'

const ErrorBox = styled.div({
  margin: 'auto'
})


export const EmailError = () => {
  const emailData = useSelector((state) => (state.EmailData))
  return (
    <ErrorBox >
        Internet Error: {emailData.error}
    </ErrorBox>
  )
}
