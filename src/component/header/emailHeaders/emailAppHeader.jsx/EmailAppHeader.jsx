import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmail, searchEmail, searching } from '@/component/eMail/mainBar/EmailData';
import { CloseEmailModal } from '@/component/eMail/index/EmailModalSlicer';

export default function EmailAppHeader({data}) {
  const emails = useSelector((state) => (state.EmailData.emails.results))

  const dispatch = useDispatch() 
  const [word, setWord] = useState('')

  const onTextChange = (e) =>setWord(e.target.value)

  const search = (word) => {
    const found = emails.filter( email => email.name.first.toLowerCase() === word)
    dispatch(searchEmail(found))
  }

  useEffect(() => {
    if(!word) return
    search(word)
  },[word])

  return (

    <Stack
      className="child"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width='100%'
      height={50}
      >

      <Stack
        direction='row'
        alignItems='center'
        sx={{
          width: '100%',
          padding: 1,
          '& input':{
            flex: 1,
            backgroundColor: 'inherit',
            border: 'none',
            outline: 'none',
            fontSize: 13,
            color: 'text.primary',
          }
        }}
       >

        <SearchRoundedIcon
           color="icon"
           sx={{
             marginRight: 1,
             fontSize: 18
           }}/>

        <input
          type="text"
          placeholder="Search Mail"
          onChange={onTextChange}
          onFocus={() => dispatch(searching(true))}
          onBlur={() => dispatch(searching(false))}
          />
        
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        >
          <RefreshRoundedIcon
            color='icon'
            onClick={() => {
              dispatch(fetchEmail(data === 'inbox' ? 12 : 3))
              dispatch(CloseEmailModal())
             }}
            sx={{
              marginRight: 1,
              fontSize: 20,
              cursor: 'pointer'
            }}
           />
        
          <MoreVertRoundedIcon
            color='icon'
            sx={{
              marginRight: 1,
              fontSize: 20,
              cursor: 'pointer'
              }}
              />

      </Stack>
    </Stack>
  )
}
